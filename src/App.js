import { useState, useEffect } from "react";
import "./App.css";
//
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getList } from "./getList";

//
import Login from "./components/Login/Login";
//
import SignUp from "./views/SignUp/SignUp";
import Cart from "./views/Cart/Cart";
//
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
//
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
//
import Notification from "./components/Notification/Notification";
import { NotificationContextProvider } from "./context/NotificationContext";
//import { UserContext } from './context/UserContext'

const App = () => {
  const [cartProducts, setCardProduct] = useState([]);
  const [user, setUser] = useState([]);
  const [itemList, setItemList] = useState([]);

  // Lógica que veremos si dejar aquí u in loading
  useEffect(() => {
    setTimeout(() => {
      setUser("Usuario");
    }, 5000);
  }, []);

  /////
  useEffect(() => {
    const list = getList();

    list
      .then(
        (list) => {
          setItemList(list);
        },
        (err) => console.log(err)
      )
      .catch((reason) => console.log(reason));
  }, []);

  return (
    <NotificationContextProvider value={user}>
      <Router>
        <NavBar itemList={itemList} cartProducts={cartProducts} />
        <Notification />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/category/:category">
            <ItemListContainer />
          </Route>
          <Route path="/contact">
            <SignUp />
          </Route>

          <Route path="/item/:id">
            <ItemDetailContainer
              productsAdded={cartProducts}
              addProdFunction={setCardProduct}
            />

            <PrivateRoute path="/cart" user={user}>
              <Cart
                productsAdded={cartProducts}
                addProdFunction={setCardProduct}
              />
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>
          </Route>
        </Switch>
      </Router>
    </NotificationContextProvider>
  );
};

export default App;
