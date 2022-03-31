import "./App.css";
import Title from "./components/Title";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Title pageTitle="Título de la página"></Title>
      <Body pageBody="Cuerpo de la página"></Body>
    </div>
  );
}

export default App;
