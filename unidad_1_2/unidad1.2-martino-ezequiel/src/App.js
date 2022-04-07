import "./App.css";

import Page from "./components/Page";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
    links: ["https://www.facebook.com/", "https://www.amazon.com"],
  };

  return (
    <div className="App">
      <Page>
        <Header title={site.pageTitle} />
        <Main body={site.pageBody} links={site.links} />
      </Page>
    </div>
  );
}

export default App;
