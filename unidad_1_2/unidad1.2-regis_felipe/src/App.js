import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Page from "./components/Page";

function App() {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
    practica: "https://github.com/Feli-Regis/tup_lab_3_practica",
    js: "https://www.javascript.com/",
  };
  return (
    <Page>
      <Header pageTitle={site.pageTitle} />
      <Main pageBody={site.pageBody} practica={site.practica} js={site.js} />
    </Page>
  );
}

export default App;
