import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Welcome from "./components/Welcome/welcome.js";
//import logo from '../assets/ llamarlo aquí'

const Titulo = () => {
  return <h2>Inicio de App</h2>;
};

const App = () => {
  //Lógica
  return (
    <div className="App">
      <header>
        <NavBar />
        <Titulo />
      </header>
      <Welcome nombre="Hola" apellido="Persona"></Welcome>
      {/* Item containerList  chekear*/}
    </div>
  );
};

export default App;
