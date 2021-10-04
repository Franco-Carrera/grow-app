import "./CartWidget.css";
//import logoCarrito from "../../../src/assets/shopping-cart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../context/CartContext";
import { useContext } from "react";

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <article className="widget__icon">
      <button className="navbar__item__cartIcon">{cartIcon}</button>
      <p className="widget__quantity">{cartQuantity}</p>
    </article>
  );
};

export default CartWidget;
