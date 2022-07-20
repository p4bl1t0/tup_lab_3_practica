import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Page from "./components/Page";

const App = () => {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
    extLinks: [
      "https://github.com/Lucas-DeLorenzi/tup_lab_3_practica/tree/main/unidad_1_2",
      "https://github.com/Lucas-DeLorenzi",
    ],
    noticeTitle:
      "El inspector de tránsito y dos policías fueron imputados pero quedaron libres por el incidente con un conductor en Mitre al 900",
    noticeBody:
      "Es por el hecho sucedido en diciembre pasado. Los policías, que agarraron del cuello y golpearon a la víctima, fueron imputados por apremios ilegales. El agente municipal fue imputado por falsedad ideológica.",
  };
  return (
    <Page>
      <Header pageTitle={site.pageTitle} />
      <Main title={site.noticeTitle} body={site.noticeBody} pageBody={site.pageBody} extLinks={site.extLinks} />
    </Page>
  );
};

export default App;
