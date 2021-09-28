import { useState, useContext } from "react";
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

    login(objUser);
    setNotification("success", `Bienvenido ${objUser.username}`);
    history.push("/");
  };

  return (
    <div>
      <div>SignIn</div>
      <form onSubmit={handleLogin}>
        <div>
          Username
          <input
            type="text"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          Password
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
