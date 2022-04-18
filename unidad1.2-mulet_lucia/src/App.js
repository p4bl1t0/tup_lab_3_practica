import "./App.css";
import Title from "./components/Title.js";
import Body from "./components/Body.js";
import Main from "./components/Main.js";
import Header from "./components/Header.js";

const App = () => {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
    pageNewsTitle:
      "Consejos para aprovechar la tecnología y motivar a nuestros hijos a estudiar",
    pageNewsBody:
      "Los chicos pasan muchas horas frente a las pantallas y, muchas veces, resulta difícil desconectarlos para hacer la tarea. Dos especialistas explican cómo acompañarlos en el aprendizaje utilizando las herramientas tecnológicas. ",
  };

  const sites = {
    link1: <a href="https://www.rosario3.com/"></a>,
    link2: <a href="https://www.youtube.com/"></a>,
  };

  return (
    <div className="App">
      <Page>
        <Header pageTitle={site.pageTitle} />
        <Main
          pageBody={site.pageBody}
          link1={sites.link1}
          link2={sites.link2}
        />
        <Main
          title={site.pageTitle.toLocaleUpperCase()}
          body={site.pageBody}
          link1={sites.link1}
          link2={sites.link2}
          titleNews={site.pageNewsTitle}
          bodyNews={site.pageNewsBody}
        />
      </Page>
    </div>
  );
};
export default App;
