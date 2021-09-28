import ItemList from "../../components/ItemList/ItemList";

const Cart = ({ productsAdded, addProdFunction }) => {
  return (
    <div>
      <h1>Cart</h1>
      <button onClick={() => addProdFunction([])} className="Button">
        Cancelar compra
      </button>
      <ItemList products={productsAdded} />
    </div>
  );
};
export default Cart;
