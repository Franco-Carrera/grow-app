import "./Cart.css";
import logoCarrito from "../../../src/assets/shopping-cart.svg";

const CartWidget = (props) => {
  return (
    <button>
      <img src={logoCarrito} alt="logo"></img>
      {props.quantity}
    </button>
  );
};

export default CartWidget;
