import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../../productsMock";
import { ProductDetail } from "./ProductDetail";

export const ProductDetailContainer = () => {
  const [producto, setProducto] = useState({});

  //   const { id } = useParams();
  const id = 8;

  useEffect(() => {
    let productosFind = productos.find((producto) => producto.id === +id);

    const getProducto = new Promise((res) => {
      res(productosFind);
    });

    getProducto
      .then((res) => setProducto(res))
      .catch((err) => console.log(err));
  }, [id]);

  return <ProductDetail producto={producto} />;
};
