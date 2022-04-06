import "./App.css";
import Body from "./components/Body";
import Title from "./components/Title";

const App = () => {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
  };
  return (
    <div>
      <Title pageTitle = {site.pageTitle}/>
      <Body pageBody = {site.pageBody}/>
    </div>
  );
}

export default App;
