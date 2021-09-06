import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Main from "./components/main/Main";
import Welcome from "./components/Welcome/welcome.js";
import ItemListContainer from "./components/ItemListContain/ItemList";
import Button from "./components/Button/Button";

import Accountant from "./components/Accountant/count.js";
import { useState } from "react";

const Titulo = () => {
  return <h2>Inicio de App</h2>;
};

const App = () => {
  const [count, setCount] = useState(0);

  //Lógica
  return (
    <div className="App">
      {/*------- header--------- */}
      <NavBar />
      <Titulo />
      {/*------- Home y ItemListContainer*/}
      <ItemListContainer name="Fran">
        <Button funcion={() => console.log("button one")}></Button>
        <Accountant valor={count} funcion={setCount} />
      </ItemListContainer>
      {/*------- Main */}
      <Main>
        <Welcome nombre="Hola" apellido="Persona"></Welcome>
        {/* Count */}
      </Main>
    </div>
  );
};

export default App;
