import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../../productsMock";
import { ProductDetail } from "./ProductDetail";
import { CartContext } from "../../../context/CartContext";

export const ProductDetailContainer = () => {
  const [producto, setProducto] = useState({});

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  //   const { id } = useParams();
  const { id } = useParams();

  const cantidad = getTotalQuantityById(+id)
  console.log("La cantidad es: ", cantidad)

  useEffect(() => {
    let productosFind = productos.find((producto) => producto.id === +id);

    const getProducto = new Promise((res) => {
      res(productosFind);
    });

    getProducto
      .then((res) => setProducto(res))
      .catch((err) => console.log(err));
  }, [id]);

  return <ProductDetail producto={producto} addToCart={addToCart} cantidad={cantidad}/>;
};
