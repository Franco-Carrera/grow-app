import "./NavBar.css";
/// Import logo aquí

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="LeftNav">
        <div className="NavOptionsLeft">
          <button className="Option">Home</button>
          <button className="Option">About</button>
          <button className="Option">Favourites</button>
        </div>
      </div>
      <div className="RightNav">
        <div className="NavOptionsRight">
          <button className="Option">SignIn</button>
          <button className="Option">SignUp</button>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
