import './App.css';

import Header from './components/Header';
import Main from './components/Main';


const App = () => {
  const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
  };

  const links = {
    google: "www.google.com",
    facebook: "www.facebook.com"
  };

  return (
    <div>
      <Header pageTitle = {site.pageTitle} />
      <Main pageBody= {site.pageBody} links = {links} />
    </div>
  ); 
}

export default App;
