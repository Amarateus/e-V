import { Button } from "@mui/material";
import { useCount } from "../../hooks/useCount";

export const ItemCount = ({ stock, initial=1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <div style={{width: 400, display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
      <Button variant="contained" onClick={decrement}>-</Button>
      <span>{count}</span>
      <Button variant="contained" onClick={increment}>+</Button>

      <Button variant="contained" onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </div>
  );
};
