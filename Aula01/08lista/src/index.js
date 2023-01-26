// Importações
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class Componente extends React.Component{

    // Render
    render(){

      // Vetor de cores
      let cores = ['Vermelho', 'Azul', 'Amarelo', 'Rosa', 'Preto', 'Verde'];

      // Laço de repetição
      let listar = cores.map((cor, indice) => {
        return <li key={indice}>{indice+1} - {cor}</li>
      });

      // Vetor de produtos
      let produtos = [
        {'produto':'Notebook',   'marca':'Dell',      'valor':4800},
        {'produto':'iPhone',     'marca':'Apple',     'valor':5700},
        {'produto':'Teclado',    'marca':'Microsoft', 'valor':50},
        {'produto':'Impressora', 'marca':'Epson',     'valor':450},
        {'produto':'Monitor',    'marca':'Samsung',   'valor':1700}
      ]

      // Laço de repetição
      let estruturaProdutos = produtos.map((obj, indice) => {
        return (
        <tr>
          <td>{indice+1}</td>
          <td>{obj.produto}</td>
          <td>{obj.marca}</td>
          <td>{obj.valor}</td>
        </tr>
        )
      });

        return(
          <div>
            <ul>
              {listar}
            </ul>

            <hr/>

            <table>
              <tbody>
              {estruturaProdutos}
              </tbody>
            </table>
          </div>
        )
    }
}

// Render
ReactDOM.render(<Componente/>, document.getElementById('root'));