//import logo from "../../../src/assets/logo.svg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="LeftNav">
        <div className="NavOptionsLeft">
          {/* Logo aquí */}
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
        {/* Item carrito  chekear*/}
      </div>
    </nav>
  );
};
export default NavBar;

//<img src={logo} className="App-Logo" alt="Logo" />
