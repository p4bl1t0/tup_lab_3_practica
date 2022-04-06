import './App.css';
import Header  from './components/Header';
import Main  from './components/Main';
import Page from './components/Page';

const App = () => {

  const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'  
  }
  const sites = {
    siteOne: <a href='http://www.gooogle.com'>Google</a>,
    siteTwo: <a href='http://www.yahoo.com'>Yahoo</a>,
  }

  return (
    <div className="App">
      <Page>
        <Header pageTitle={site.pageTitle}/>
        <Main pageBody={site.pageBody} siteOne={sites.siteOne} siteTwo={sites.siteTwo}/>
      </Page>
    </div>
  )
}

export default App;
