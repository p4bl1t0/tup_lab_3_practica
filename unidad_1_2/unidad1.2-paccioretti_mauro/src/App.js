// import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Page from "./components/Page";

function App() {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
  };

  return (
    <div className="App">
      <Page>
        <Header pageTitle={site.pageTitle} />
        <Main
          pageBody={site.pageBody}
          enlace1={"https://www.google.com"}
          enlace2={"https://github.com/mauropaccioretti"}
        >
          Frase enviada como children desde app a main
        </Main>
      </Page>
    </div>
  );
}

export default App;
