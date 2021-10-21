import "./App.css";
import { useContext } from "react";
//
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Notification from "./components/Notification/Notification";
//
import NavBar from "./components/navbar/NavBar";
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
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/category/:categoryid">
              <ItemListContainer />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart" user={user}>
              <Cart />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </CartContextProvider>
    </NotificationContextProvider>
  );
};

export default App;
