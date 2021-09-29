///
//mport { useState, useEffect } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import NavBarItem from "../NavBarItem/NavBarItem";
import logo from "../../../src/assets/logo.svg";
import CartWidget from "../CartWidget/CartWidget";
//import UserContext from "../../context/UserContext";

// nuevo on add, reemplaza x cart

const NavBar = ({ itemlist, cartProducts }) => {
  //const [productQuantity, setProductQuantity] = useState(0);
  //const { user, logout } = useContext(UserContext);

  const arrayObjets = [
    { id: "Fertilizantes", description: "productos Fertilizantes" },
  ];

  // realizar descripciones en archivo parte, Like profe y ver este mapeo lógica

  return (
    <header className="header">
      <section className="container">
        <nav className="NavBar ">
          {/* ----------Nav------------*/}
          <ul className="navbar__menu">
            <div className="LeftNav">
              <div className="NavOptionsLeft">
                <img src={logo} className="App-logo" alt="Logo" />

                {/*--------------NavLinks---------*/}
                <NavLink
                  activeClassName="navLinkActive"
                  className="Option"
                  exact
                  to="/"
                >
                  <NavBarItem label="productos" />
                </NavLink>

                {arrayObjets.map((cat) => (
                  <NavLink
                    activeClassName="navLinkActive"
                    key={cat.id}
                    className="Option"
                    to={`/category/${cat.description}`}
                  >
                    <NavBarItem label="favourites" />
                  </NavLink>
                ))}

                <NavLink
                  activeClassName="navLinkActive"
                  className="Option"
                  to="/contact"
                >
                  <NavBarItem label="contacto" />
                </NavLink>
              </div>
            </div>
          </ul>

          <div className="RightNav">
            <div className="NavOptionsRight">
              <div className="Cart__Container">
                <Link to="/cart">
                  <CartWidget />
                </Link>
              </div>

              {/*---------*/}
            </div>
            <p className="contadorCarrito">0</p>
          </div>
        </nav>
      </section>
    </header>
  );
};
export default NavBar;
