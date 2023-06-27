import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetail } from "./ProductDetail";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

export const ProductDetailContainer = () => {
  const [producto, setProducto] = useState({});

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  //   const { id } = useParams();
  const { id } = useParams();

  const cantidad = getTotalQuantityById(+id);
  console.log("La cantidad es: ", cantidad);

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
    <ProductDetail
      producto={producto}
      addToCart={addToCart}
      cantidad={cantidad}
    />
  );
};
