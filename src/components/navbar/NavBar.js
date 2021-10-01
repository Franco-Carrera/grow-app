///
//mport { useState, useEffect } from "react";
import { useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import NavBarItem from "../NavBarItem/NavBarItem";
import logo from "../../../src/assets/logo.svg";
import CartContext from "../../context/CartContext";
import CartWidget from "../CartWidget/CartWidget";
import NotificationContext from "../../context/NotificationContext";
//import UserContext from "../../context/UserContext";

// nuevo on add, reemplaza x cart

const NavBar = ({ categories }) => {
  //const { user, logout } = useContext(UserContext);
  const { getQuantity } = useContext(CartContext);
  const { setNotification } = useContext(NotificationContext);

  const handleLogout = () => {
    setNotification("error", `Hasta luego `);
  };

  return (
    <header className="header">
      <section className="container">
        <nav className="NavBar ">
          {/* ----------Nav------------*/}

          <div className="LeftNav">
            <div className="NavOptionsLeft">
              {/* {user ? (
                <button className="btn1 btn-outline-success1" onClick={logout}>
                  Cerrar sesion
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn1 btn-outline-success1">Ingresa</button>
                </Link>
              )} */}

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

              {categories.map((cat) => (
                <NavLink
                  activeClassName="navLinkActive"
                  key={cat.id}
                  className="Option"
                  to={`/category/${cat.title}`}
                >
                  <NavBarItem label={cat.title} />
                </NavLink>
              ))}

              <button onClick={handleLogout}>Logout</button>

              <NavLink
                activeClassName="navLinkActive"
                className="Option"
                to="/contact"
              >
                <NavBarItem label="contacto" />
              </NavLink>
            </div>
          </div>

          <div className="NavOptionsRight">
            {/* {user && cartProducts.length > 0 && ( */}
            {getQuantity() > 0 && (
              <NavLink to="/cart">
                <CartWidget />
              </NavLink>
            )}
            {/* // )} */}

            {/* <p className="contadorCarrito">0</p> */}
            {/*---------*/}
          </div>
        </nav>
      </section>
    </header>
  );
};
export default NavBar;
