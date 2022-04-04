import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Page from "./components/Page";

function App() {
  const Site = {
    pageTitle: "Unidad 1.2 - Practica",
    pageBody: "Implementacion de arbo de componentes y propiedades en React",
  };
  return (
    <Page>
      <div classname="container">
        <Header pageTitle={Site.pageTitle} />
        <Main pageBody={Site.pageBody} />
      </div>
    </Page>
  );
}

export default App;
