import "./NavBarItem.css";

const NavBarItem = ({ label }) => {
  return (
    <li>
      <button>{label}</button>
    </li>
  );
};

export default NavBarItem;
