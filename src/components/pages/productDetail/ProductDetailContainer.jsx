import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetail } from "./ProductDetail";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import { Loader } from "../../common/loader/Loader";
import Swal from 'sweetalert2'

export const ProductDetailContainer = () => {
  const [producto, setProducto] = useState({});

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  //   const { id } = useParams();
  const { id } = useParams();

  const cantidad = getTotalQuantityById(id);

  const onAdd = (cant) => {
    let data = {
      ...producto,
      cantidad: cant,
    };
    addToCart(data);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500
    })
  };

  useEffect(() => {
    let itemCollection = collection(db, "productos");
    let refDoc = doc(itemCollection, id);
    getDoc(refDoc).then((res) => {
      setProducto({
        id: res.id,
        ...res.data(),
      });
    });
  }, [id]);

  return (
    <div>
      {producto?.id ? (
        <ProductDetail producto={producto} cantidad={cantidad} onAdd={onAdd} />
      ) : (
        <Loader />
      )}
    </div>
  );
};
