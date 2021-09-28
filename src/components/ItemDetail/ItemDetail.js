//import { useState } from "react";
import { useEffect, useState, useContext } from "react";
import Counter from "../Count/counter";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./ItemDetail.css";
import UserContext from "../../context/UserContext";

//Capittal Letter
const capitalLetter = (str) =>
  str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);

const ItemDetail = ({ item, productsAdded, addProdFunction }) => {
  const [quantity, setQuantity] = useState(0);
  const { user } = useContext(UserContext);

  const addToCart = (productsQuantity) => {
    setQuantity(productsQuantity);
  }; // lo agregado

  useEffect(() => {
    console.log(quantity);
    return () => {
      console.log(`desmonta ${quantity}`);
    };
  }, [quantity]);

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

          <footer className="footer__detail">
            {quantity === 0 && user ? (
              <Counter
                stock={item.stock}
                onConfirm={addToCart}
                item={item}
                productsAdded={productsAdded}
                addProdFunction={addProdFunction}
                setCount={quantity}
              />
            ) : user ? (
              <Link to="/cart">
                <button className="Button">Ir al carrito</button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="Button">Login</button>
              </Link>
            )}

            <p className="price_detail">${item.price}</p>
          </footer>
        </div>
      </main>
      {/* //  {coun != 0 button terminar ? } */}
    </section>
  );
};

///// Importar vista de un sólo producto

// Y aquí iria el renderizado
export default ItemDetail;
