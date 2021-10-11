import "./Button.css";

const Button = ({ label, clickHandler }) => {
  return (
    <button onClick={clickHandler} className="btn_Handler">
      {label}
    </button>
  );
};

export default Button;
