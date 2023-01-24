// Importações 
import React from 'react';
import ReactDOM from 'react-dom';

// Importar Componentes
import Componente1 from './Componente1';
import Componente2 from './Componente2';


// Estrutura
const estrutura = 
<div>
  <Componente1></Componente1>
  <Componente2></Componente2>
</div>

// Render
ReactDOM.render(estrutura, document.getElementById('root'));