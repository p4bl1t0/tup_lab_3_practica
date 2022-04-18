import './App.css';
import BlogSpot from './components/BlogSpot';
import Main from "./components/Main";

const site = {
  pageTitle: 'Unidad 1.2 - Práctica',
  pageBody: 'Implementación de árbol de componentes y propiedades en React.',
}


function App() {

  return (
    <div>
      <Main title={site.pageTitle} body={site.pageBody}/>
      <BlogSpot/>
    </div>
  );
}

export default App;
