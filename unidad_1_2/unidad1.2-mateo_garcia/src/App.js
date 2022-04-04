import "./App.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

const App = ({ pageHeader }, { pageMain }) => {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
  };
  return (
    <div>
      <div>
        <Header Header={pageHeader} />
      </div>
      <div>
        <Main Main={pageMain} />
      </div>
    </div>
  );
};

export default App;
