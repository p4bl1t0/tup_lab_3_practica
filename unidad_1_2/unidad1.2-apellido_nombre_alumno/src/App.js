import "./App.css";
import Page from "./components/Page";

function App() {
  const site = {
    pageTitle: "Practica 2?",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
  };

  return (
    <div>
      <Page pageTitle={site.pageTitle} pageBody={site.pageBody} />
    </div>
  );
}

export default App;
