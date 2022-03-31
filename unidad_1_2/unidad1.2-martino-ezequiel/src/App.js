import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
    link1 : "https://www.facebook.com/",
    link2 : "https://www.amazon.com/",
  
  }

  return (
    <div>
      <Header pageTitle={site.pageTitle} />
      <Main pageBody={site.pageBody}
        link1={site.link1}
        link2={site.link2}
     />
    </div>
  );
}

export default App;
