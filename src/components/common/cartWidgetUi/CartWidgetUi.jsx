import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidgetUi = () => {
  return (
    <Badge badgeContent={2} color="primary">
      <ShoppingCartIcon />
    </Badge>
  );
};
