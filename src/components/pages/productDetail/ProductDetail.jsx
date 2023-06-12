import { ItemCount } from "../../common/itemCount/ItemCount";
import { ProductCardContainer } from "../../common/productCard/ProductCardContainer";

export const ProductDetail = ({ producto }) => {
  const onAdd = (cant) => {
    let data = {
      ...producto,
      cantidad: cant,
    };
  };
  return (
    <>
      <ProductCardContainer elemento={producto} width={500}/>
      {producto.stock > 0 ? (
        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
      ) : (
        <h3>No hay stock</h3>
      )}
    </>
  );
};
