import Body from "./components/Body.js";

const Main = () => {
    const site = {
        pageTitle: "Unidad 1.2 - Práctica",
        pageBody: "Implementación de árbol de componentes y propiedades en React.",
      };
  return (
    <div>
      <Body pageMain={site.pageBody} />
    </div>
  );
};

export default Main;
