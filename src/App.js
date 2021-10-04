import "./App.css";
//
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//
import { getCategories } from "./data";
import SignUp from "./components/SignUp/SignUp";
import Cart from "./components/Cart/Cart";
//
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
//
import { CartContextProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <NavBar categories={getCategories()} />
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
    </CartContextProvider>
  );
};

export default App;
