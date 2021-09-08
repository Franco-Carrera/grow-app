import { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Counter from "./components/Count/counter";
import Main from "./components/main/Main";
import Welcome from "./components/Welcome/welcome.js";
import ItemListContainer from "./components/ItemListContain/ItemList";
import Button from "./components/Button/Button";

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
      <Counter inicial={1} max={25} />
      <Titulo />
      {/* -----------------------*/}

      {/*------- Home y ItemListContainer*/}
      <ItemListContainer name="Fran">
        <Button></Button>
      </ItemListContainer>

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
