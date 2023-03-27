import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Creazione di una applicazione React usando "create-react-app"</p>
        <ButtonComponent text="Hello" />
        <ButtonComponent text="World" />
      </header>
    </div>
  );
}

export default App;
