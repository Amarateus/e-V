import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartContainer = () => {
  const { cart, clearCart, removeById } = useContext(CartContext);

  console.log(cart);

  return (
    <div>
      <button onClick={clearCart}>Limpiar carrito</button>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.nombre}</h2>
            <h3>{product.precio}</h3>
            <h3>{product.cantidad}</h3>
            <button onClick={()=>removeById(product.id)}>Elimnar</button>
          </div>
        );
      })}
    </div>
  );
};
