import { useContext, useState, useEffect } from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import NavBarItem from "../NavBarItem/NavBarItem";
import logo from "../../../src/assets/logo.svg";
import CartWidget from "../CartWidget/CartWidget";
import UserContext from "../../context/UserContext";
import CartContext from "../../context/CartContext";
import NotificationContext from "../../context/NotificationContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faDumpster,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { getCategories } from "../../services/firebase/firebase";

const homeIcon = <FontAwesomeIcon icon={faHouseUser} />;
const loginIcon = <FontAwesomeIcon icon={faUserAstronaut} />;
const productsIcon = <FontAwesomeIcon icon={faDumpster} />;

const NavBar = () => {
  const [categories, setCategories] = useState();
  const { user, logout } = useContext(UserContext);
  const { getQuantity } = useContext(CartContext);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    getCategories()
      .then((categories) => {
        setCategories(categories);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      setCategories();
    };
  }, []);

  const handleLogout = () => {
    logout();
    setNotification("error", `Hasta luego ${user}`);
  };

  return (
    <header className="header">
      <section className="container">
        <nav className="NavBar ">
          {/* ----------Nav------------*/}
          <div className="LeftNav">
            <div className="NavOptionsLeft">
              <Link to="/">
                <img src={logo} className="App-logo" alt="Logo" />
              </Link>
              {/*--------------NavLinks---------*/}

              <NavLink
                activeClassName="navLinkActive"
                className="Option"
                exact
                to="/grow-app"
              >
                <NavBarItem label="home" />
              </NavLink>

              <NavLink
                activeClassName="navLinkActive"
                className="Option"
                exact
                to="/"
              >
                <NavBarItem label="productos" />
              </NavLink>

              {categories?.map((category) => (
                <NavLink
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="Option"
                  activeClassName="navLinkActive"
                >
                  <NavBarItem label={category.description} />
                </NavLink>
              ))}

              {user ? (
                <div className="contain__logout">
                  <button className="Option__detail" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              ) : (
                <NavLink className="Option" to="/login">
                  <NavBarItem label="login">Login</NavBarItem>
                </NavLink>
              )}
            </div>
          </div>

          <div className="RightNav">
            <div className="NavOptionsRight">
              <div className="contain__cart">
                {user && getQuantity() > 0 && (
                  <Link to="/cart">
                    <CartWidget />
                  </Link>
                )}
              </div>

              <section>
                <div className="mobile__buttons">
                  <Link className="products_button" to="/">
                    {productsIcon}
                  </Link>
                  <Link className="user_button" to="/login">
                    {loginIcon}
                  </Link>
                  <Link className="home_button" to="/grow-app">
                    {homeIcon}
                  </Link>
                </div>
              </section>
            </div>
            {/* Cambiar si no se usa este icon + estado */}

            {/*---------*/}
          </div>
        </nav>
      </section>
    </header>
  );
};
export default NavBar;
