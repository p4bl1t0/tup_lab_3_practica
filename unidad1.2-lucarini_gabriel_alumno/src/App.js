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
<<<<<<< HEAD
      <Page title={site.pageTitle} body={site.pageBody}/>
      <BlogSpot/>
=======
      <Page pageTitle={site.pageTitle} pageBody={site.pageBody}/>
>>>>>>> fa58da1d827e89a8c9c4a69281ab9369c9d6b3f4
    </div>
  );
}

export default App;
