import "./Cart.css";
import { useContext } from "react";
import logoCarrito from "../../../src/assets/shopping-cart.svg";
import CartContext from "../../context/CartContext";

const CartWidget = (props) => {
  const { getQuantity } = useContext(CartContext);

  return (
    <button className="Button__cart">
      <img className="logo__Cart" src={logoCarrito} alt="logo"></img>
      {getQuantity()}
    </button>
  );
};

export default CartWidget;

/** const objOrder = {
    buyer: user,
    items: products,
    total: total,
    date: TimeStamp.fromDate(new Date())
  } */
