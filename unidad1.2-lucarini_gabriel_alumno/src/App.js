import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";

const site = {
  pageTitle: 'Unidad 1.2 - Práctica',
  pageBody: 'Implementación de árbol de componentes y propiedades en React.'
}


function App() {

  return (
    <div>
      <Header pageTitle={site.pageTitle}/>
      <Main         
        li1="https://www.google.com.ar/"
        li2="https://www.infobae.com/"
        pageBody={site.pageBody}/>
    </div>
  );
}

export default App;
