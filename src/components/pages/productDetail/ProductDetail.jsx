import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { ItemCount } from "../../common/itemCount/ItemCount";
import { Link } from "react-router-dom";

export const ProductDetail = ({ producto, onAdd, cantidad }) => {
  return (
    <>
      <Container maxWidth={"xs"} sx={{ paddingTop: 3 }}>
        <Box sx={{ textAlign: "center", width: "100%" }}>
          <img src={producto.img} width={"100%"} height={"300"} />
        </Box>
        <Typography variant="h4" component="h2">
          Categoria: {producto.categoria}
        </Typography>
        <Typography variant="h5" component="h1">
          Nombre: {producto.nombre}
        </Typography>
        <Typography variant="subtitle1" component="h3">
          Descripcion: {producto.descripcion}
        </Typography>
        <Typography variant="h5" component="h3">
          Valor: ${producto.precio}
        </Typography>

        {producto.stock > 0 ? (
          <ItemCount stock={producto.stock} initial={cantidad} onAdd={onAdd} />
        ) : (
          <div>
            <h3>No hay stock</h3>
            <Link to={"/"}>
              <Button variant="contained">Continuar explorando</Button>
            </Link>
          </div>
        )}
      </Container>
    </>
  );
};
