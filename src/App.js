import { useState } from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContain/ItemList";
import NavBar from "./components/navbar/NavBar";
import Main from "./components/main/Main";
import Welcome from "./components/Welcome/welcome.js";

const Titulo = () => {
  return <h2 className="text-left">Inicio de App</h2>;
};

const App = () => {
  const [view, setView] = useState(true);
  ///
  ///
  //
  //
  //Lógica
  return (
    <div className="App">
      {/*------- header--------- */}
      {view ? <NavBar /> : <h1>Navbar desmontado</h1>}

      <button onClick={() => setView(!view)}>Mostrar Navbar o no</button>
      {/* --------New Counter */}
      <Titulo />
      {/* -----------------------*/}

      {/*------- Home y ItemListContainer*/}
      <ItemListContainer name="Fran"></ItemListContainer>

      {/*------- Main------------ */}
      <Main>
        {/* --------Count------ */}
        <Welcome nombre="Hola" apellido="Persona"></Welcome>
        {/* Count */}
      </Main>
    </div>
  );
};

export default App;
