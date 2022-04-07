import "./App.css";
import Page from "./components/Page";
import Main from "./components/Main";
import Header from "./components/Header";
const site = {
  pageTitle: "Unidad 1.2 - Práctica",

  pageBody: "Implementación de árbol de componentes y propiedades en React.",
  links: ["https://www.infobae.com/", "https://www.rosario3.com/"],
};
function App() {
  return (
    <div className="App">
      <Page>
        <Header title={site.pageTitle} />
        <Main
          body={site.pageBody}
          link1={site.links[0]}
          link2={site.links[1]}
        />
      </Page>
    </div>
  );
}

export default App;
