import "./App.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Page from "./components/Page";

const App = () => {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
  };
  const links = {
    github: "https://github.com/mateogd012",
    linkedin: "https://www.linkedin.com/in/mateo-garcia-758aa1211/",
  };
  return (
    <div>
      <Page>
        <div>
          <Header pageTitle={site.pageTitle} />
        </div>
        <div>
          <Main 
            pageBody={site.pageBody}
            links={links}
          />
        </div>
      </Page>
    </div>
  );
};

export default App;
