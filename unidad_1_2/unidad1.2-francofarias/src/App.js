import React from 'react';
import './App.css'
import BlogPost from './components/BlogPost';
import Header from './components/Header';
import Main from './components/Main';
import Page from './components/Page';
//import BlogPost from './BlogPost'

function App() {

  const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.',
    youtube:'https://www.youtube.com/',
    google: 'https://www.google.com/',
  }

  return (
    <div>
      <Page>
            <Header title = {site.pageTitle}/>
            <Main body = {site.pageBody}
            youtube = {site.youtube}
            google = {site.google}
            />
      </Page>
    </div>
  );
};

export default App;
