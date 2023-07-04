import { createContext, useState } from "react";
import Swal from "sweetalert2";

// creo el context
export const CartContext = createContext();

// componente proveedor del context
// retorna el context en su prop .Provider
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

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
      localStorage.setItem("cart", JSON.stringify(newArray));
    } else {
      setCart([...cart, newProduct]);
      localStorage.setItem("cart", JSON.stringify([...cart, newProduct]));
    }
  };

  // existe el producto en el carrito?
  const isInCart = (id) => {
    let exist = cart.some((prod) => prod.id === id);
    return exist;
  };

  // vaciar carrito
  const clearCart = () => {
    setCart([]), localStorage.removeItem("cart");
  };

  // eliminar un producto del carrito
  const removeById = (id) => {
    let newArray = cart.filter((product) => product.id !== id);

    localStorage.setItem("cart", JSON.stringify(newArray));

    Swal.fire({
      title: "¿Seguro quieres eliminar el producto del carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      result.isConfirmed &&
        (setCart(newArray),
        Swal.fire({
          title: "Producto eliminado",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }));
    });
  };

  // obtener cant de unidades de un prod en el carrito
  const getTotalQuantityById = (id) => {
    let product = cart.find((prod) => prod.id === id);
    return product?.cantidad;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.precio * elemento.cantidad;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    removeById,
    getTotalQuantityById,
    getTotalPrice,
    // setCart,    NO es buena practica pasar el setter
  };

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};

export default CartContextProvider;
