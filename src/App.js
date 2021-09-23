import { useState, useEffect } from "react";
import "./App.css";
//
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
//
import { getList } from "./getList";
import SignUp from "./views/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
//
import Notification from "./components/Notification/Notification";
import { NotificationContextProvider } from "./context/NotificationContext";
//import { UserContext } from './context/UserContext'

const App = () => {
  const [cardProducts, setCardProducts] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [user, setUser] = useState(undefined);
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
    <NotificationContextProvider>
      <Router>
        <NavBar itemList={itemList} cardProducts={cardProducts} />
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
          <Route path="/cart" user={user}>
            <CartWidget
              productsAdded={cardProducts}
              addProdFunction={setCardProducts}
            />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer
              productsAdded={cardProducts}
              addProdFunction={setCardProducts}
            />
          </Route>
        </Switch>
      </Router>
    </NotificationContextProvider>
  );
};

export default App;
