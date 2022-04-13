import './App.css';
import Page from './components/Page';
import Main from './components/Main';


const App = () => {

  const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.',
    pageNewsTitle: 'La corta carrera de "Pipi", un tiratiros que se entregó a la Justicia',
    pageNewsBody: 'Tiene 19 años y había dicho que hacía tiempo "esperaba la oportunidad" de formar parte del grupo. Lo imputaron como miembro de la asociación ilícita'
  }
  const sites = {
    siteOne: <a href='https://www.latlmes.com/breaking/told-ya-1'>Not Google</a>,
    siteTwo: <a href='http://www.google.com'>Google</a>,
  }

  return (
    <div className="App">
      <Page>
        <Main title={site.pageTitle.toLocaleUpperCase()} body={site.pageBody} siteOne={sites.siteOne} siteTwo={sites.siteTwo} titleNews={site.pageNewsTitle} bodyNews={site.pageNewsBody}/> 
      </Page>
    </div>
  )
}

export default App;
