import "./App.css";
import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Notification from "./components/Notification/Notification";
//
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
//
import { NotificationContextProvider } from "./context/NotificationContext";
import { CartContextProvider } from "./context/CartContext";
import UserContext from "./context/UserContext";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <NotificationContextProvider>
      <CartContextProvider>
        <Router>
          <NavBar />
          <Notification />
          <Switch>
            <Route exact path="/grow-app" component={Home} />
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/category/:categoryid" component={ItemListContainer} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route path="/cart" user={user} component={Cart} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </CartContextProvider>
    </NotificationContextProvider>
  );
};

export default App;
