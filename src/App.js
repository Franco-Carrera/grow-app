import { useState, useEffect } from "react";
import "./App.css";
//
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//
import { getList } from "./getList";
import SignUp from "./views/SignUp/SignUp";
import Cart from "./views/Cart/Cart";

import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./views/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./views/ItemListContainer/ItemListContainer";

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
    <Router>
      <NavBar itemList={itemList} />
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
  );
};

export default App;

// Crear componentes SECCIONES
/// Browser ruter se comunica con botones de navbar y desde allí
//lleva a componentes con esos mismos nombres
// por medio del path     // dentro de app

// <Route path="/">
//<Home/>
//</Route>
//</Switch>
//</BrowserRouter>
