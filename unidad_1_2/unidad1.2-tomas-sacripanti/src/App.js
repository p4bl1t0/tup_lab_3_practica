import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
  };
  return (
    <div className="App">
      <Header pageTitle={site.pageTitle}></Header>
      <Main
        linkOne="https://www.google.com/"
        linkTwo="https://www.youtube.com/"
        pageBody={site.pageBody}
      ></Main>
    </div>
  );
}

export default App;
