import { Grid } from "@mui/material";
import { ProductCardContainer } from "../../common/productCard/ProductCardContainer";

export const ProductsList = ({ elementos }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {elementos.map((elemento) => {
        return (
          <Grid item xs={12} sm={6} md={4}>
            <ProductCardContainer key={elemento.id} elemento={elemento} width={250}/>
          </Grid>
        );
      })}
    </Grid>
  );
};
