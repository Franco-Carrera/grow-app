///
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import NavBarItem from "../NavBarItem/NavBarItem";
import logo from "../../../src/assets/logo.svg";
import CartWidget from "../CartWidget/CartWidget";

// nuevo on add, reemplaza x cart

const NavBar = ({ itemList }) => {
  const categories = [...new Set(itemList.map((item) => item.category))];

  //const arrayObjets = [
  // { id: "Fertilizantes", description: "productos Fertilizantes" },
  //];

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

                {categories.map((cat) => (
                  <NavLink
                    key={cat}
                    activeClassName="navLinkActive"
                    className="Option"
                    to={`/category/${cat}`}
                  >
                    {/* <NavBarItem label={cat} /> */}
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
                <NavLink activeClassName="navLinkActive" to="/cart">
                  <CartWidget />
                </NavLink>
              </div>
              {/*---------*/}
            </div>
            {/* <p className="contadorCarrito">0</p> */}
          </div>
        </nav>
      </section>
    </header>
  );
};
export default NavBar;
