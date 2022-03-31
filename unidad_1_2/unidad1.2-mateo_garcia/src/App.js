import "./App.css";
import Title from "./components/Title.js";
import Body from "./components/Body.js";

const App = () => {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
  };

  return (
    <div>
      <div>
      <Title pageTitle={site.pageTitle}/>
      </div>
      <div>
      <Body pageBody={site.pageBody}/>
      </div>
    </div>

  );
};

export default App;
