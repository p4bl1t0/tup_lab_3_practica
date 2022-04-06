import "./App.css";
import Title from "./components/Title";
import Body from "./components/Body";

const site = {
  pageTitle: "Unidad 1.2 - Práctica",
  pageBody: "Implementación de árbol de componentes y propiedades en React.",
};

function App() {
  return (
    <div>
      <Title pageTitle={site.pageTitle} />
      <Body pageBody={site.pageBody} />
    </div>
  );
}

export default App;
