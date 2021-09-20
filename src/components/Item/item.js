import Counter from "../Count/counter";
import "./item.css";

//Capittal Letter
const capitalLetter = (str) =>
  str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);

const Item = ({ itemData }) => {
  return (
    <div className="card">
      <img className="card__img" alt="#" src={itemData.pictureUrl}></img>
      <div className="cards__text ">
        <p className="card__title">{capitalLetter(itemData.title)}</p>
        <div className="containerPrice">
          <p className="description">{capitalLetter(itemData.description)}</p>
          <p className="price">${itemData.price}</p>
        </div>
        <Counter stock={itemData.stock} />
      </div>
    </div>
  );
};

//posible ItemDos

export default Item;
