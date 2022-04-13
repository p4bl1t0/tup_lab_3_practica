import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Page from "./components/Page";

function App() {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
    github: "https://github.com/giurushima",
    linkedin: "https://www.linkedin.com/in/giurushima/",
    sentence: "Programador en proceso",
  };

  return (
    <div>
      <Page>
        <Header title={site.pageTitle} />
        <Main
          body={site.pageBody}
          github={site.github}
          linkedin={site.linkedin}
          sentence={site.sentence}
        />
      </Page>
    </div>
  );
}

export default App;
