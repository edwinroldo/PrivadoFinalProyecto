import React from 'react';   //importar React para utilizar componentes y JSX
import ReactDOM from 'react-dom/client';   //para interactuar con el DOM
import './index.css';   //importa estilos globales desde archivo CSS
import App from './App';  //componente principal
import reportWebVitals from './reportWebVitals';  //mide el rendimiento de la aplicación

//contenedor raiz donde se montara la aplicacion
const root = ReactDOM.createRoot(document.getElementById('root'));

//renderiza componente principal de la aplicacion App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
