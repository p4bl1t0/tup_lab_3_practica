import "./App.css";
import Title from "./components/Title.js";
import Body from "./components/Body.js";
import Main from "./components/Main.js";
import Header from "./components/Header.js";

const App = () => {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
  };

  return (
    <div>
      <Title pageTitle={site.pageTitle} />
      <Body pageBody={site.pageBody} />
      <Header pageTitle={site.pageTitle} />
      <Main
        pageBody={site.pageBody}
        link1="https://www.rosario3.com/"
        link2="https://www.youtube.com/"
      />
    </div>
  );
};
export default App;
