import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";

const Titulo = () => {
  return <h2>Inicio de App</h2>;
};

const App = () => {
  return (
    <div className="App">
      <header>
        {/* class App-header */}
        <NavBar />
        <Titulo />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default App;
