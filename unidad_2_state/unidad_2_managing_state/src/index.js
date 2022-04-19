import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';

const contanier = document.getElementById("root");
const root = ReactDOMClient.createRoot(contanier);
root.render(<App tab="home" />)