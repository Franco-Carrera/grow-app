import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Counter from "../Count/counter";
import Loading from "../Loading/Loading";
import "./ItemDetail.css";
import Button from "../Button/Button";

//Capittal Letter
const capitalLetter = (str) =>
  str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);

const ItemDetail = ({ item }) => {
  //
  const [itemAdded, setItemAdded] = useState(false);
  const { user } = useContext(UserContext);

  const activeLogin = () => {
    console.log("activo");
  };

  if (!item) {
    return <Loading />;
  }

  return (
    <section>
      {/* crear card styles */}
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
          <p className="price_detail">${item.price}</p>
          {!itemAdded ? (
            <Counter className="counter" item={item} itemAdded={setItemAdded} />
          ) : user ? (
            <Link to="/cart">
              <Button label="Finalizar compra" />
            </Link>
          ) : (
            <Link to="/login">
              <button
                onClick={() => activeLogin}
                className="Option__detail"
                label="Login"
              >
                Login
              </button>
            </Link>
          )}
          {/* en button cambiarlo para ponerlo mas arriba + color*/}
        </footer>
      </main>
    </section>
  );
};

export default ItemDetail;
