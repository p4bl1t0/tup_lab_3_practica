import "./App.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Page from "./components/Page";

const App = () => {
  const site = {
    title: "Unidad 1.2 - Práctica",
    body: "Implementación de árbol de componentes y propiedades en React.",
  };
  const links = {
    github: "https://github.com/mateogd012",
    linkedin: "https://www.linkedin.com/in/mateo-garcia-758aa1211/",
  };
  return (
    <div>
      <Page>
        <div>
          <Header title={site.title} />
        </div>
        <div>
          <Main 
            body={site.body}
            links={links}
          />
        </div>
      </Page>
    </div>
  );
};

export default App;
