import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidgetUi = () => {
  const { cart } = useContext(CartContext);

  return (
    <Badge badgeContent={cart.length} showZero color="primary" sx={{ marginLeft: 2 }}>
      <ShoppingCartIcon />
    </Badge>
  );
};
