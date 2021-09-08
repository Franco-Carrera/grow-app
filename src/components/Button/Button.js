import "./Button.css";

const Button = ({ funciones, labels }) => {
  return <button onClick={funciones}>{labels}</button>;
};

export default Button;
