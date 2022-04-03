import './App.css';
import Page from "./components/Page";

const site = {
  pageTitle: 'Unidad 1.2 - Práctica',
  pageBody: 'Implementación de árbol de componentes y propiedades en React.'
}


function App() {

  return (
    <div>
      <Page pageTitle={site.pageTitle} pageBody={site.pageBody}/>
    </div>
  );
}

export default App;
