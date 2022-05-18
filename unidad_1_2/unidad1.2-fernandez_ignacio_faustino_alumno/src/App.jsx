import Header from "./components/Header";
import Main from "./components/Main";
import Page from "./components/Page";

const App = () => {
  const Site = {
    PageTitle: "Unidad 1.2 - Practica",
    PageBody: "Implementacion de arbol de componentes y propiedades en React.",
  };

  return (
    <Page>
      <div Classname="Container">
        <Header PageTitle={Site.PageTitle} />
        <Main PageBody={Site.PageBody} />
      </div>
    </Page>
  );
};

export default App;
