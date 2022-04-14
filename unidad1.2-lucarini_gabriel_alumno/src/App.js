import './App.css';
import BlogSpot from './components/BlogSpot';
import Page from "./components/Page";

const site = {
  pageTitle: 'Unidad 1.2 - Práctica',
  pageBody: 'Implementación de árbol de componentes y propiedades en React.',
}


function App() {

  return (
    <div>
      <Page title={site.pageTitle} body={site.pageBody}/>
      <BlogSpot/>
    </div>
  );
}

export default App;
