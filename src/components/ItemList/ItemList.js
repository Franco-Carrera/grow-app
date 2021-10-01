import Item from "../Item/item";
import Loading from "../Loading/Loading";
import "./ItemList.css";

const ItemList = ({ products }) => {
  if (!products) {
    return <Loading />;
  }

  return (
    <article className="container__cards">
      {products.map((product) => (
        <Item key={product.id} itemData={product} />
      ))}
    </article>
  );
};

export default ItemList;
