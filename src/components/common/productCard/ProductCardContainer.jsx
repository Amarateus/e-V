import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import styles from "./ProductCardContainer.module.css";

export const ProductCardContainer = ({ elemento, width}) => {
  return (
    <Link to={`/productDetail/${elemento.id}`}>
      <Card sx={{ width: width }}>
        <CardMedia
          component="img"
          height="140"
          image={elemento.img}
          alt={elemento.nombre}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {elemento.nombre}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {elemento.categoria}
          </Typography>
          <Typography variant="h6" component="div">
            ${elemento.precio}
          </Typography>
          <Typography variant="subtitle2" component="div" mt={2}>
            Toca para ver detalle
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
