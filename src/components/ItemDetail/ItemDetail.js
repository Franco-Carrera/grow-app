import Counter from "../Count/counter";
import "./ItemDetail.css";

//Capittal Letter
const capitalLetter = (str) =>
  str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);

const ItemDetail = ({ item }) => {
  return (
    <div className="itemDetail">
      <article>
        <h2 className="title">{capitalLetter(item.description)}</h2>
      </article>

      <main>
        <img src={item.pictureUrl} alt="PictureDetail" />
        <div className="details">
          <p className="description">{capitalLetter(item.longDescription)}</p>
          <p className="price">${item.price}</p>
        </div>
      </main>

      <footer>
        <Counter className="counter" stock={item.stock} />
      </footer>
    </div>
  );
};

///// Importar vista de un sólo producto

// Y aquí iria el renderizado
export default ItemDetail;
