import "./App.css";
import Page from "./components/Page.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

function App() {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
  };
  return (
    <div className="App">
      <Page>
        <Header pageTitle={site.pageTitle} />
        <Main pageBody={site.pageBody} />
      </Page>
    </div>
  );
}

export default App;
