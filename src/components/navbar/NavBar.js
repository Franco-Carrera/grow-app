///
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import NavBarItem from "../NavBarItem/NavBarItem";
import logo from "../../../src/assets/logo.svg";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = ({ categories }) => {
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
                to="/"
              >
                <NavBarItem label="productos" />
              </NavLink>

              {categories.map((category) => (
                <NavLink
                  activeClassName="navLinkActive"
                  key={category.id}
                  className="Option"
                  to={`/category/${category.id}`}
                >
                  <NavBarItem label={category.title} />
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

          <div className="RightNav">
            <div className="NavOptionsRight">
              <div>
                <NavLink to="/cart">
                  <CartWidget />
                </NavLink>
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
