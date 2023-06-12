import { useEffect, useState } from "react";
import { ProductsList } from "./ProductsList";
import { productos } from "../../../productsMock";

export const ProductsListContainer = () => {
  const [elementos, setElementos] = useState([]);

  useEffect(() => {
    const traerProductos = new Promise((res, rej) => {
      res(productos);
    });
    traerProductos
      .then((res) => {
        setElementos(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <ProductsList elementos={elementos} />;
};
