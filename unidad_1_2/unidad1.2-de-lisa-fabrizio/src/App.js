import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Page from './components/Page';


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
      <Page>
        <Header title = {site.pageTitle} />
        <Main body= {site.pageBody} links = {links} />
      </Page>
    </div>
  ); 
}

export default App;