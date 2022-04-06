import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Page from './components/Page';

function App() {

  const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
  }

  const links = {
    firstLink: 'www.google.com',
    secondLink: 'www.twitter.com'
  }

  return (
    <div className="App">
      <Page>
      <Header title={site.pageTitle}/>
      <Main body={site.pageBody} firstLink={links.firstLink} secondLink={links.secondLink}/>
      </Page>
    </div>
  );
}

export default App;


