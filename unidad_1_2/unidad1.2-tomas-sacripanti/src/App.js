import "./App.css";
import Page from "./components/Page.js";

function App() {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
  };
  return (
    <div className="App">
      <Page pageTitle={site.pageTitle} pageBody={site.pageBody}></Page>
    </div>
  );
}

export default App;
