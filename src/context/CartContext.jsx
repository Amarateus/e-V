import { createContext, useState } from "react";

// creo el context
export const CartContext = createContext();

// componente proveedor del context
// retorna el context en su prop .Provider
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // fn agregar un producto al carrito
  const addToCart = (newProduct) => {
    //pregunto si ya existe
    let exist = isInCart(newProduct.id);
    if (exist) {
      let newArray = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            cantidad: newProduct.cantidad,
          };
        } else {
          return product;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, newProduct]);
    }
  };

  // existe el producto en el carrito?
  const isInCart = (id) => {
    let exist = cart.some((prod) => prod.id === id);
    return exist;
  };

  // vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  // eliminar un producto del carrito
  const removeById = (id) => {
    let newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
  };

  // obtener cant de unidades de un prod en el carrito
  const getTotalQuantityById = (id)=>{
    let product = cart.find((prod)=> prod.id === id)
    return product?.cantidad
  }

  let data = {
    cart,
    addToCart,
    clearCart,
    removeById,
    getTotalQuantityById,
    // setCart,    NO es buena practica pasar el setter
  };

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};

export default CartContextProvider;
