import "./Cart.css";
import logoCarrito from "../../../src/assets/shopping-cart.svg";

const CartWidget = () => {
  return (
    <button>
      <img src={logoCarrito} alt="logo"></img>
    </button>
  );
};

export default CartWidget;
