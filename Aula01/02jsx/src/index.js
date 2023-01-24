// Importações
import React from 'react';
import ReactDOM from 'react-dom';

// Sem JSX
// const elemento = React.createElement('h1', 'Sem JSX');
// ReactDOM.render(elemento, document.getElementById('root'));

// Com JSX
const elemento = <h1>Com JSX</h1>;
ReactDOM.render(elemento, document.getElementById('root'));