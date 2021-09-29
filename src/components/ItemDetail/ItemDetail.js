//import { useState } from "react";
import Counter from "../Count/Counter";
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
          {/* <p className="price_detail">${item.price}</p> */}

          <footer className="footer__detail">
            <p className="price_detail">${item.price}</p>
            <Counter item={item} />
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
