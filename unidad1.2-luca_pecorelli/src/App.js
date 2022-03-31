
import './App.css';
import Title from './components/title';
import Body from './components/body';


const App = () => {
  
  const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
  }
  
  return (
    <div>
      <Title pageTitle={site.pageTitle} />
      <Body pageBody={site.pageBody}/>
     
    </div>
  );
}

export default App;
