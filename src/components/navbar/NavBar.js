import logo from "../../../src/assets/logo.svg";
import logoCarrito from "../../../src/assets/shopping-cart.svg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="header">
      <section className="container">
        <nav className="NavBar ">
          <div className="LeftNav">
            <div className="NavOptionsLeft">
              {/* Logo aquí */}
              <img src={logo} className="App-logo" alt="Logo" />
              <button className="Option">Home</button> {/*Reemplaz x <a> */}
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
              <img className="logoCarri" src={logoCarrito} alt="" />
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
