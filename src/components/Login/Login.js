import { useState, useContext } from "react";
import "./Login.css";
import UserContext from "../../context/UserContext";
import NotificationContext from "../../context/NotificationContext";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(UserContext);
  const { setNotification } = useContext(NotificationContext);
  const history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();

    const objUser = {
      username,
      password,
    };
    if (username && password !== "") {
      login(objUser);
      setNotification("success", `Bienvenido ${objUser.username}`);
      history.push("/");
    } else {
      console.log("cadena vacía");
    }
  };

  return (
    <div className="LoginContainer">
      <h2>Log In</h2>
      <form onSubmit={handleLogin} className="LoginForm">
        <label className="LabelLogin">
          Usuario
          <input
            className="InputLogin"
            type="text"
            value={username}
            required
            onChange={({ target }) => setUsername(target.value)}
          />
        </label>
        <label className="LabelLogin">
          Contraseña
          <input
            className="InputLogin"
            type="password"
            value={password}
            required
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <button type="submit" className="Option__detail">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
