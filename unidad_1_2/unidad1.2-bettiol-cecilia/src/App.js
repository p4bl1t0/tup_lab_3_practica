import Header from "./components/Header";
import Main from "./components/Main";
import Page from "./components/Page";

const App = () => {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
    link1: "https://reactjs.org/",
    link2: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
  };

  return (
    <Page>
      <Header pageTitle={site.pageTitle}/>
      <Main pageBody={site.pageBody}
      link1={site.link1}
      link2={site.link2}/>
    </Page>
  );
};

export default App;
