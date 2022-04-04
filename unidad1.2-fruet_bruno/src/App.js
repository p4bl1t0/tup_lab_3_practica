import "./App.css";
import Page from "./components/Page";
const site = {
  pageTitle: "Unidad 1.2 - Práctica",

  pageBody: "Implementación de árbol de componentes y propiedades en React.",
};
function App() {
  return (
    <div className="App">
      <Page props={site} />
    </div>
  );
}

export default App;
