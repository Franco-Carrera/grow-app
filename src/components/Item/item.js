import { Link } from "react-router-dom";
import Counter from "../Count/counter";
import "./item.css";

//Capittal Letter
const capitalLetter = (str) =>
  str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);

const Item = ({ itemData }) => {
  return (
    <div className="card">
      <Link to={`/item/${itemData.id}`}>
        <img className="card__img" alt="#" src={itemData.pictureUrl}></img>
      </Link>
      {/* ------------------------ */}
      <div className="cards__text ">
        <div className="containerPrice">
          <p className="description">{capitalLetter(itemData.description)}</p>
          <p className="price">${itemData.price}</p>
        </div>
        <Counter stock={itemData.stock} />
      </div>
      {!itemData.quantity && (
        <Link to={`/item/${itemData.id}`} className="Button_Link">
          Comprar
        </Link>
      )}
    </div>
  );
};

////onConfirm=itemData.onConfirm
//posible ItemDos

export default Item;
