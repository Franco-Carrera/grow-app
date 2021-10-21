import Item from "../Item/item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <article className="container__cards">
      {products.map((product) => (
        <Item key={product.id} itemData={product} />
      ))}
    </article>
  );
};

export default ItemList;
