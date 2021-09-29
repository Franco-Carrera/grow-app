import Item from "../Item/item";
import Loading from "../Loading/Loading";
import "./ItemList.css";

const ItemList = ({ products }) => {
  if (!products) {
    return <Loading />;
  }

  // if (products.length === 0) {
  //   return <h3>No hay productos</h3>;
  // }

  return (
    <article className="container__cards">
      {products.map((item) => (
        <Item key={item.id} itemData={item} />
      ))}
    </article>
  );
};

// item = cada producto

export default ItemList;
