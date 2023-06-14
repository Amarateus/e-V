import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCardContainer = ({ elemento, width, mensajeBoton}) => {
  return (
    <Card sx={{ width: width }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={elemento.img}
          alt={elemento.nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {elemento.nombre}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {elemento.categoria}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {elemento.descripcion}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ${elemento.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/productDetail/${elemento.id}`}>
          <Button size="small" color="primary">
            {mensajeBoton}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
