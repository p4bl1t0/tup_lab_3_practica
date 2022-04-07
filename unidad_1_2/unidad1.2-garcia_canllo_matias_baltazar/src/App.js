import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Page from "./components/Page";

function App() {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
    practica:
      "https://github.com/BaltazarG/tup_lab_3_practica/tree/main/unidad_1_2",
    react: "https://es.reactjs.org/",
  };
  return (
    <>
      <Page>
        <Header title={site.pageTitle} />
        <Main
          body={site.pageBody}
          react={site.react}
          practica={site.practica}
        />
      </Page>
    </>
  );
}

export default App;
