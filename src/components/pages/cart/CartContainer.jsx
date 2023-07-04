import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);

  const precioTotal = getTotalPrice();

  const recargoIva = precioTotal * 0.21;

  const vaciarCarrito = ()=>{
    Swal.fire({
      title: "¿Seguro quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      result.isConfirmed &&
        (clearCart(),
        Swal.fire({
          title: "Carrito vaciado",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }));
    });
  }

  return (
    <>
      <Container maxWidth={"lg"} sx={{ paddingTop: 3 }}>
        {cart.length > 0 ? (
          <>
            <Grid container spacing={2}>
              <Grid item sm={8}>
                <Grid container spacing={2} direction="column">
                  {cart.map((product) => {
                    return (
                      <Grid item sm={12} key={product.id}>
                        <Grid
                          container
                          spacing={2}
                          direction="row"
                          alignItems="center"
                          justifyContent="space-around"
                        >
                          <Grid item>
                            <img src={product.img} width="60px" height="50px" />
                          </Grid>
                          {/* <Grid item>
                            <Typography variant="h7" component="h4">{product.categoria}</Typography>
                          </Grid> */}
                          <Grid item>
                            <Typography variant="h7" component="h4">
                              {product.nombre}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="h7" component="h4">
                              ${product.precio}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="h7" component="h4">
                              Cant: {product.cantidad}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="h7" component="h4">
                              Tot: ${product.cantidad * product.precio}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Button
                              variant="outlined"
                              onClick={() => removeById(product.id)}
                            >
                              Elimnar
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>

              <Grid item sm={4} sx={{ borderLeft: "solid 1px" }}>
                <Typography variant="h5" component="h1" mb={2}>
                  Resumen del carrito:
                </Typography>
                <Typography variant="h6" component="h3">
                  Total carrito: .......... ${precioTotal}
                </Typography>
                <Typography variant="h6" component="h3">
                  Recargo IVA: .......... ${recargoIva}
                </Typography>
                <Typography variant="h6" component="h3">
                  Descuentos: .......... $0
                </Typography>
                <Typography variant="h6" component="h3" my={2}>
                  Total a pagar: .......... ${precioTotal + recargoIva}
                </Typography>

                <Link to="/checkout">
                  <Button variant="outlined" sx={{ marginRight: 1 }}>
                    Ir a pagar
                  </Button>
                </Link>

                <Button variant="outlined" onClick={vaciarCarrito}>
                  Vaciar carrito
                </Button>
              </Grid>
            </Grid>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h1>El carrito esta vacio</h1>
            <Link to={"/"}>
              <Button variant="contained">Continuar buscando</Button>
            </Link>
          </div>
        )}
      </Container>
    </>
  );
};
