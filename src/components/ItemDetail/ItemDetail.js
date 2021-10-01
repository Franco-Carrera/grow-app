//import { useState } from "react"; volaría x uno

import Counter from "../Count/counter";
//import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./ItemDetail.css";
//import UserContext from "../../context/UserContext";

//Capittal Letter
const capitalLetter = (str) =>
  str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);

const ItemDetail = ({ item, productsAdded, addProdFunction }) => {
  // const [count, setCount] = useState(0); volaria x2
  //const { user } = useContext(UserContext);

  if (!item) {
    return <Loading />;
  }
  // se debería cambiar item x itemData para que lo tome.

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
            {/* {count === 0 && user ? ( */}
            <Counter
              stock={item.stock}
              //onConfirm={addToCart}
              item={item}
              productsAdded={productsAdded}
              addProdFunction={addProdFunction}
              // setCount={setCount}
            />
            {/**Con el CartContext volarían todas las props post item **/}
            {/* ) : user ? ( */}

            {/* <Link to="/cart">
              <button className="Button">Ir al carrito</button>
            </Link> * */}

            {/* ) : ( */}

            {/* <Link to="/login">
              <button className="Button">Login</button>
            </Link> */}

            {/* )} */}
            <p className="price_detail">${item.price}</p>
          </footer>
        </div>
      </main>
    </section>
  );
};

// De aca me lleva al counter

export default ItemDetail;
