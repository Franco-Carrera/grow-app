//import {useState, useEffect} from "react";
import { useEffect } from "react";
import logo from "../../../src/assets/logo.svg";
import "./NavBar.css";
import CartWidget from "../Cart/Cart";

const NavBar = (valor) => {
  // const [product, setProduct] = useState("")

  useEffect(() => {
    console.log("Después del primer renderizado"); // SE VIENE FETCH.
    //

    ///

    return () => {
      console.log("Antes de desmontar el componente");
    };
  }, []);
  console.log("El componente va a ser renderizado");

  return (
    <header className="header">
      <section className="container">
        <nav className="NavBar ">
          <div className="LeftNav">
            <div className="NavOptionsLeft">
              <img src={logo} className="App-logo" alt="Logo" />
              {/*-------------------Button props---------*/}
              <button className="Option">Home</button>
              {/*Reemplaz x <a> */} {/*minuto 58 childrens*/}
              <button className="Option">About</button>
              <button className="Option">Favourites</button>
            </div>
          </div>
          <div className="RightNav">
            <div className="NavOptionsRight">
              <button className="Option">SignIn</button>
              <button className="Option">SignUp</button>
            </div>
            <div>
              {/* CartWidget */}
              <CartWidget />
            </div>
            <p className="contadorCarrito">0</p>
            {/* Item carrito */}
          </div>
        </nav>
      </section>
    </header>
  );
};
export default NavBar;

///
////
