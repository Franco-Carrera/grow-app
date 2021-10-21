import "./CartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../context/CartContext";
import { useContext } from "react";

const cartIcon = <FontAwesomeIcon icon={faShoppingBag} />;

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
