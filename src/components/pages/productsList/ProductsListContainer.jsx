import { useEffect, useState } from "react";
import { ProductsList } from "./ProductsList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Loader } from "../../common/loader/Loader";

export const ProductsListContainer = () => {
  const [elementos, setElementos] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let itemCollection = collection(db, "productos");
    let consulta;

    if (!categoryName || categoryName === "Todos") {
      consulta = itemCollection;
    } else {
      consulta = query(itemCollection, where("categoria", "==", categoryName));
    }

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            id: elemento.id, // el id viene por fuera del resto de los datos del prod
            ...elemento.data(),
          };
        });

        products.sort(function (a, b) {
          if (a.precio > b.precio) {
            return 1;
          }
          if (a.precio < b.precio) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });

        setElementos(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div>
      {elementos.length > 0 ? (
        <ProductsList elementos={elementos} />
      ) : (
        <Loader />
      )}
    </div>
  );
};
