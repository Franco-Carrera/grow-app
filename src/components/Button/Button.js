import "./Button.css";

const Button = ({ funcion, label }) => {
  return <button onClick={funcion}>{label}</button>;
};

export default Button;
