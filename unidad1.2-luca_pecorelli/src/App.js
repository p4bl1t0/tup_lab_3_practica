
import './App.css';
import Header from './components/Header';
import Main from './components/Main';


const App = () => {
  
  const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
  }

  const links = {
    link1: 'https://frro.cvg.utn.edu.ar/',
    link2: 'https://developer.mozilla.org'
  }
  
  return (
    <div>
      <Header pageTitle={site.pageTitle} />
      <Main pageBody={site.pageBody}
            link1 = {links.link1} 
            link2 = {links.link2} />
     
    </div>
  );
}

export default App;
