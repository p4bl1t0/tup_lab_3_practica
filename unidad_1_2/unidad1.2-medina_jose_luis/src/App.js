import "./App.css";
import Page from "./components/Page";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
    links: ["https://compragamer.com/", "https://linustechtips.com/"],
  };

  return (
    <div>
      <Page>
        <Header title={site.pageTitle} />
        <Main body={site.pageBody} links={site.links} />
      </Page>
    </div>
  );
};

export default App;
