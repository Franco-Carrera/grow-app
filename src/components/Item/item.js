import { Link } from "react-router-dom";
import "./Item.css";
import "animate.css/animate.min.css";

//Capittal Letter
const capitalLetter = (str) =>
  str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);

const Item = ({ itemData }) => {
  return (
    <div className="animate__animated animate__fadeInUp">
      <div className="card">
        {/* ------------------ */}
        <div className="card__body">
          <div className="overflow__img">
            <Link to={`/item/${itemData.id}`}>
              <img
                className="card__img"
                alt="#"
                src={itemData.pictureUrl}
              ></img>
            </Link>
          </div>
          {/* ------------------------ */}
          <div className="cards__text ">
            <div className="containerPrice">
              <p className="description">{capitalLetter(itemData.title)}</p>
              <p className="price">${itemData.price}</p>
            </div>
          </div>
          <Link to={`/item/${itemData.id}`} className="Button_Link">
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

//posible ItemDos

export default Item;
