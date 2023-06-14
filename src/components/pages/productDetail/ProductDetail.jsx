import { Container } from "@mui/material";
import { ItemCount } from "../../common/itemCount/ItemCount";
import { ProductCardContainer } from "../../common/productCard/ProductCardContainer";

export const ProductDetail = ({ producto }) => {
  const onAdd = (cant) => {
    let data = {
      ...producto,
      cantidad: cant,
    };
    console.log(data);
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
          <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
        ) : (
          <h3>No hay stock</h3>
        )}
      </Container>
    </>
  );
};
