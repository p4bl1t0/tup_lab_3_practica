
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Page from './components/Page';

function App() {
  const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.',
    links: [ 'https://google.com', 'https://apple.com' ]
  };
  return (
    <div className="App">
      <Page>
        <Header pageTitle={site.pageTitle} />
        <Main pageBody={site.pageBody} links={site.links} />
      </Page>
    </div>
  );
}

export default App;
