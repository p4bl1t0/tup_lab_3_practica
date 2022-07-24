//tarea 4 terminada
import './App.css';
import Main from './components/Main';
import Header from './components/Header';

function App() {
  const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.',
  }

  const links = [
    'https://reactjs.org/',
    'https://developer.mozilla.org/',
  ];
  
  return (
    <div className="App">
      <page>
          <Header
            pageTitle = {site.pageTitle}
          />
          
          <Main 
            pageBody = {site.pageBody}
            links = {links}
            />  
        </page> 

    </div>
  );
};

export default App;