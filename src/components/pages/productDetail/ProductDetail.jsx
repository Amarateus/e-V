import { Container } from "@mui/material";
import { ItemCount } from "../../common/itemCount/ItemCount";
import { ProductCardContainer } from "../../common/productCard/ProductCardContainer";

export const ProductDetail = ({ producto, addToCart, cantidad }) => {
  const onAdd = (cant) => {
    let data = {
      ...producto,
      cantidad: cant,
    };
    addToCart(data);
  };

  return (
    <>
      <Container maxWidth={"md"} sx={{ paddingTop: 3 }}>
        <ProductCardContainer
          elemento={producto}
          width={500}
          mensajeBoton={"Comprar"}
        />
        {producto.stock > 0 ? (
          <ItemCount stock={producto.stock} initial={cantidad} onAdd={onAdd} />
        ) : (
          <h3>No hay stock</h3>
        )}
      </Container>
    </>
  );
};
