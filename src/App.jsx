import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Creazione di una applicazione React usando "create-react-app"</p>
        <div className="btnWrapper" style={{ display: "flex", gap: "5px" }}>
          <ButtonComponent
            text="Hello"
            bgColor="#f4a261"
            fs="1.5"
            radius="5"
            border="4px solid #e76f51"
            color="#e76f51"
          />
          <ButtonComponent
            text="World!"
            bgColor="#e76f51"
            fs="1.2"
            radius="15"
            border="7px solid #f4a261"
            color="#e9c46a"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
