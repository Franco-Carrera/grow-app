///
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import NavBarItem from "../NavBarItem/NavBarItem";
import logo from "../../../src/assets/logo.svg";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = ({ itemList }) => {
  const categories = [...new Set(itemList.map((item) => item.category))];

  return (
    <header className="header">
      <section className="container">
        <nav className="NavBar ">
          {/* ----------Nav------------*/}
          <div className="LeftNav">
            <div className="NavOptionsLeft">
              <img src={logo} className="App-logo" alt="Logo" />

              {/*--------------NavLinks---------*/}
              <NavLink className="Option" exact to="/">
                <NavBarItem label="productos" />
              </NavLink>

              {categories.map((cat) => (
                <NavLink key={cat} className="Option" to={`/category/${cat}`}>
                  <NavBarItem label="favourites" />
                </NavLink>
              ))}

              <NavLink className="Option" to="/contact">
                <NavBarItem label="contacto" />
              </NavLink>
            </div>
          </div>

          <div className="RightNav">
            <div className="NavOptionsRight">
              <div>
                <NavLink to="/cart">
                  <CartWidget />
                </NavLink>
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
