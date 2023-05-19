import { BsFillCartFill } from "react-icons/bs";
import styles from "./CartWidget.module.css"

export const CartWidget = () => {
  return (
    <div className={styles.carrito}>
        <BsFillCartFill />
        <div className={styles.contador}>
            <h4>2</h4>
        </div>
    </div>  
  )
};
