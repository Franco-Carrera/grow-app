import { useState } from "react";
//
import { BrowserRouter, Switch, Route } from "react-router-dom";
//
import "./App.css";
import ItemListContainer from "./components/ItemListContain/ItemList";
import FetchSearch from "./components/FetchSearch/FetchSearch";
import NavBar from "./components/navbar/NavBar";
import Main from "./components/main/Main";
import Welcome from "./components/Welcome/welcome.js";

const Titulo = () => {
  return <h2 className="text-left">Inicio de App</h2>;
  /**Futuro useEffect + setTimeout */
};

const App = () => {
  const [view, setView] = useState(true);
  ///
  ///
  //
  //Renderizado
  return (
    <div className="App">
      <BrowserRouter>
        {/*-------------- */}

        {/*------- header--------- */}
        {view ? <NavBar /> : <h1>Navbar desmontado</h1>}

        <button onClick={() => setView(!view)}>Mostrar Navbar o no</button>

        <Titulo />
        <FetchSearch />
        {/* -----------------------*/}

        {/*------- Home y ItemListContainer*/}
        <ItemListContainer name="Fran"></ItemListContainer>
        {/* Comienzo de switch */}
        <Switch>
          <Route exact path="/main">
            {/*------- Main------------ */}
            <Main>
              {/* --------Welcome------ */}
              <Welcome nombre="Hola" apellido="Persona"></Welcome>
              {/*------------------------ */}
            </Main>
            {/*--------------------- */}
          </Route>
        </Switch>
        {/*------------------------*/}
      </BrowserRouter>
    </div>
  );
};

export default App;
