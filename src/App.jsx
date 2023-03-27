import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Applicazione React</h1>
        <p>Creazione di una applicazione React usando "create-react-app"</p>

        <div className="btnWrapper" style={{ display: "flex", gap: "5px", paddingBottom: "20px" }}>
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

        <div
          className="imgWrapeper"
          style={{ display: "flex", justifyContent: "space-around", width: "100vw", flexWrap: "wrap" }}
        >
          <ImageComponent src="https://picsum.photos/id/110/300/300" alt="Landscape" picNum="1" />
          <ImageComponent src="https://picsum.photos/id/38/300/300" alt="Clouds" picNum="2" />
        </div>
      </header>
    </div>
  );
}

export default App;
