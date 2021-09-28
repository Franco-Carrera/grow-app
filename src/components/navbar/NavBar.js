///
import { useState, useEffect, useContext } from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import NavBarItem from "../NavBarItem/NavBarItem";
import logo from "../../../src/assets/logo.svg";
import CartWidget from "../CartWidget/CartWidget";
import UserContext from "../../context/UserContext";

// nuevo on add, reemplaza x cart

const NavBar = ({ itemlist, categories, cartProducts }) => {
  const [productQuantity, setProductQuantity] = useState(0);
  const { user, logout } = useContext(UserContext);

  useEffect(() => {
    if (cartProducts.length === 0) {
      setProductQuantity(0);
    } else {
      cartProducts.forEach((prod) => {
        setProductQuantity(productQuantity + prod.quantity);
      });
    }
  }, [cartProducts]); // eslint-disable-line

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

                <div>
                  {user ? (
                    <button onClick={logout}>Logout</button>
                  ) : (
                    <Link to="/login">
                      <button>Login</button>
                    </Link>
                  )}
                </div>

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
                {user && cartProducts.length > 0 && (
                  <Link to="/cart">
                    <CartWidget quantity={productQuantity} />
                  </Link>
                )}
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
