// import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
  };

  return (
    <div className="App">
      <Header pageTitle={site.pageTitle} />
      <Main
        pageBody={site.pageBody}
        enlace1={"https://www.google.com"}
        enlace2={"https://github.com/mauropaccioretti"}
      />
    </div>
  );
}

export default App;
