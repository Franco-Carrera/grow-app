import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Counter from "../Count/Counter";
import Loading from "../Loading/Loading";
import "./ItemDetail.css";
import Button from "../Button/Button";

//Capittal Letter
const capitalLetter = (str) =>
  str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);

const ItemDetail = ({ item }) => {
  const [itemAdded, setItemAdded] = useState(false);
  const { user } = useContext(UserContext);

  const activeLogin = () => {
    console.log("activeLogin");
  };

  if (!item) {
    return <Loading />;
  }

  return (
    <section>
      <header>
        <h2 className="title_detail">{capitalLetter(item.title)}</h2>
      </header>

      <main className="mainDetail">
        <img
          className="card__img_detail"
          src={item.pictureUrl}
          alt="PictureDetail"
        />
        <div className="details_details">
          <p className="description_detail">
            {capitalLetter(item.longDescription)}
          </p>
        </div>

        <footer className="footer__detail">
          {!itemAdded ? (
            <div>
              <p className="price_detail">${item.price}</p>
              <Counter item={item} itemAdded={setItemAdded} />
            </div>
          ) : user ? (
            <Link to="/cart">
              <Button label="Finalizar compra" />
            </Link>
          ) : (
            <Link to="/login">
              <button
                onClick={() => activeLogin()}
                className="Option__detail"
                label="Login"
              >
                Login
              </button>
            </Link>
          )}
        </footer>
      </main>
    </section>
  );
};

export default ItemDetail;
