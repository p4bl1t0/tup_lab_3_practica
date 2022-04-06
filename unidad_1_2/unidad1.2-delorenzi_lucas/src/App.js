import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
    extLinks: [
      "https://github.com/Lucas-DeLorenzi/tup_lab_3_practica/tree/main/unidad_1_2",
      "https://github.com/Lucas-DeLorenzi",
    ],
  };
  return (
    <div>
      <Header pageTitle={site.pageTitle} />
      <Main pageBody={site.pageBody} extLinks={site.extLinks} />
    </div>
  );
};

export default App;
