import { Container, Grid } from "@mui/material";
import { ProductCardContainer } from "../../common/productCard/ProductCardContainer";

export const ProductsList = ({ elementos }) => {
  return (
    <Container maxWidth={"md"} sx={{ paddingTop: 3 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {elementos.map((elemento) => {
          return (
            <Grid key={elemento.id} item xs={10} sm={4} md={3}>
              <ProductCardContainer
                elemento={elemento}
                // width={200}
                mensajeBoton={"Ver detalle"}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
