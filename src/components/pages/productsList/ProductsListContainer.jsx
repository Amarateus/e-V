import { useEffect, useState } from "react";
import { ProductsList } from "./ProductsList";
import { productos } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ProductsListContainer = () => {
  const [elementos, setElementos] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let itemCollection = collection(db, "productos");
    let consulta;

    if (!categoryName || categoryName === "Todos") {
      consulta = itemCollection     
    } else {
      consulta = query(itemCollection, where("categoria", "==", categoryName))
    }

    getDocs(consulta)
        .then((res) => {
          let products = res.docs.map((elemento) => {
            return {
              id: elemento.id, // el id viene por fuera del resto de los datos del prod
              ...elemento.data(),
            };
          });
          setElementos(products);
        })
        .catch((err) => console.log(err));
  }, [categoryName]);

  return <ProductsList elementos={elementos} />;
};
