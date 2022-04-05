import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Page from "./components/Page";

const App = () => {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",

    pageBody: "Implementación de árbol de componentes y propiedades en React.",
  };

  const links = [
    {
      name: "Google",
      url: "https://www.google.com",
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com",
    },
  ];
  return (
    <Page>
      <Header pageTitle={site.pageTitle} />
      <Main pageBody={site.pageBody} links={links} />
    </Page>
  );
};

export default App;
