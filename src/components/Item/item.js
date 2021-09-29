import { Link } from "react-router-dom";
//import Counter from "../Count/Counter";
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
          <p className="description">
            {capitalLetter(itemData.shortDescription)}
          </p>
          <p className="price">${itemData.price}</p>
        </div>
      </div>
    </div>
  );
};

////onConfirm=itemData.onConfirm
//<Counter stock={itemData.stock} />
//posible ItemDos

export default Item;
