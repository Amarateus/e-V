import { useEffect, useState } from "react";
import { ProductsList } from "./ProductsList";
import { productos } from "../../../productsMock";
import { useParams } from "react-router-dom";

export const ProductsListContainer = () => {
  const [elementos, setElementos] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let filtrarProductos = productos.filter(
      (producto) => producto.categoria === categoryName
    );

    const traerProductos = new Promise((res) => {
      if (categoryName === "Todos") {
        res(productos);
      } else if (categoryName) {
        res(filtrarProductos);
      } else {
        res(productos);
      }
    });
    traerProductos
      .then((res) => {
        setElementos(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryName]);

  return <ProductsList elementos={elementos} />;
};
