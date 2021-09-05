import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Main from "./components/main/Main";
import Welcome from "./components/Welcome/welcome.js";

const Titulo = () => {
  return <h2>Inicio de App</h2>;
};

const ItemListContainer = () => {
  return <p>Este es mi texto de ItemContainer en 0</p>;
};

const App = () => {
  //Lógica
  return (
    <div className="App">
      {/* header */}
      <NavBar />
      <Titulo />
      {/* header */}
      <ItemListContainer />
      {/* De aquí en adelante comienza Main*/}
      <Welcome nombre="Hola" apellido="Persona"></Welcome>
      <Main></Main>
    </div>
  );
};

export default App;
