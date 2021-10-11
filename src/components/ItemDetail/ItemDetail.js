import { useState } from "react";
import { Link } from "react-router-dom";
import Counter from "../Count/counter";
import Loading from "../Loading/Loading";
import "./ItemDetail.css";
import Button from "../Button/Button";

//Capittal Letter
// const capitalLetter = (str) =>
//   str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);

const ItemDetail = ({ item }) => {
  //
  const [itemAdded, setItemAdded] = useState(false);

  if (!item) {
    return <Loading />;
  }

  return (
    <section>
      {/* crear card styles */}
      <header>
        <h2 className="title_detail">{item.title}</h2>
      </header>

      <main className="mainDetail">
        <img
          className="card__img_detail"
          src={item.pictureUrl}
          alt="PictureDetail"
        />
        <div className="details_details">
          <p className="description_detail">{item.longDescription}</p>
          <p className="price_detail">${item.price}</p>
        </div>

        <footer className="footer__detail">
          {!itemAdded ? (
            <Counter className="counter" item={item} itemAdded={setItemAdded} />
          ) : (
            <Link to="/cart">
              <Button label="Finalizar compra" />
            </Link>
          )}
        </footer>
      </main>
    </section>
  );
};

export default ItemDetail;
