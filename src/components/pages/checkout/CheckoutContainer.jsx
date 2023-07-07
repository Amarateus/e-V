import { useFormik } from "formik";
import { Checkout } from "./Checkout";
import * as Yup from "yup";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [ordenCompraId, setOrdenCompraId] = useState(null);

  const precioTotalCarrito = getTotalPrice() + getTotalPrice() * 0.21;

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
    },
    onSubmit: (data) => {
      let ordenCompra = {
        buyer: data,
        items: cart,
        total: precioTotalCarrito,
      };

      let ordenesCompraCollection = collection(db, "ordenesCompra");
      addDoc(ordenesCompraCollection, ordenCompra).then((res) =>
        setOrdenCompraId(res.id)
      );

      cart.forEach((producto) => {
        updateDoc(doc(db, "productos", producto.id), {
          stock: producto.stock - producto.cantidad,
        });
      });

      clearCart();
    },

    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Campo obligatorio")
        .min(2, "Debe contener al menos 2 caracteres"),
      email: Yup.string().required("Campo obligatorio").email("Email inválido"),
      telefono: Yup.string()
        .required("Campo obligatorio")
        .min(10, "Debe contener al menos 10 caracteres"),
    }),
  });

  return (
    <div>
      {ordenCompraId ? (
        <>
          <Container maxWidth={"md"} sx={{ paddingTop: 10 }}>
            <div style={{ textAlign: "center" }}>
              <Typography variant="h5" component="h2" my={3}>
                Su compra fue exitosa ✅
              </Typography>
              <Typography variant="h6" component="h3" mb={2}>
                Numero de comprobante:
              </Typography>
              <Typography variant="h7" component="h3" mb={2}>
                {ordenCompraId}
              </Typography>
              <Link to="/">
                <Button variant="contained">Volver al inicio</Button>
              </Link>
            </div>
          </Container>
        </>
      ) : (
        <Checkout
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      )}
    </div>
  );
};
