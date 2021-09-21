import Counter from "../Count/counter";
import Loading from "../Loading/Loading";
import "./ItemDetail.css";

//Capittal Letter
const capitalLetter = (str) =>
  str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);

const ItemDetail = ({ item }) => {
  if (!item) {
    return <Loading />;
  }

  return (
    <div className="itemDetail">
      <header>
        <h2 className="title">{capitalLetter(item.title)}</h2>
      </header>

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
