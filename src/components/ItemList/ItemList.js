import { Link } from "react-router-dom";
import Item from "../Item/item";
import Loading from "../Loading/Loading";
import "./ItemList.css";

const ItemList = ({ products }) => {
  if (!products) {
    return <Loading />;
  }

  return (
    <article className="container__cards">
      {products.map((item) => (
        <Link key={item.id} to={`/item/${item.id}`}>
          <Item itemData={item} />
        </Link>
      ))}
    </article>
  );
};

// ver si se deja aquí la key

export default ItemList;
