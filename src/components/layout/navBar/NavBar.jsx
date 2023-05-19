import { CartWidget } from "../../common/cartWidget/CartWidget";
import styles from "./NavBar.module.css"

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <h3>Logo e-V</h3>
      <ul>
        <li>Mancuernas</li>
        <li>Pesas rusas</li>
        <li>Barras</li>
        <li>Discos</li>
        <li>Elasticos</li>
        <li>Pelotas</li>
        <li>Colchonetas</li>
      </ul>
      <div>
        <CartWidget />
      </div>
    </div>
  );
};
