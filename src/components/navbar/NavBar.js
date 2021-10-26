import { useContext, useState, useEffect } from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import NavBarItem from "../NavBarItem/NavBarItem";
import logo from "../../../src/assets/logo.svg";
import CartWidget from "../CartWidget/CartWidget";
import UserContext from "../../context/UserContext";
import CartContext from "../../context/CartContext";
import NotificationContext from "../../context/NotificationContext";
import { getCategories } from "../../services/firebase/firebase";

const NavBar = () => {
  const [categories, setCategories] = useState();
  const { user, logout } = useContext(UserContext);
  const { getQuantity } = useContext(CartContext);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    getCategories()
      .then((categories) => {
        setCategories(categories);
        console.log(categories);
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
              {/* <button class="menu-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
                </svg>
                <svg
                  class="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
                </svg>
              </button> */}

              <NavLink
                activeClassName="navLinkActive"
                className="Option"
                exact
                to="/home"
              >
                <NavBarItem label="Home" />
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
                  <NavBarItem label="Login">Login</NavBarItem>
                </NavLink>
              )}
            </div>
          </div>

          <div className="RightNav">
            <div className="NavOptionsRight">
              <div>
                {user && getQuantity() > 0 && (
                  <Link to="/cart">
                    <CartWidget />
                  </Link>
                )}
              </div>
              {/*---------*/}
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
};
export default NavBar;
