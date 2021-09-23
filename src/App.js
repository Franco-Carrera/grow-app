import { useState, useEffect } from "react";
import "./App.css";
//
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getList } from "./getList";
//
import SignUp from "./views/SignUp/SignUp";
import Cart from "./views/Cart/Cart";
//
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
//
import Notification from "./components/Notification/Notification";
import { NotificationContextProvider } from "./context/NotificationContext";
//import { UserContext } from './context/UserContext'

const App = () => {
  const [itemList, setItemList] = useState([]);

  // Lógica que veremos si dejar aquí u in loading

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
        <NavBar itemList={itemList} />
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
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </Router>
    </NotificationContextProvider>
  );
};

export default App;
