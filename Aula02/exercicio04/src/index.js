import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import './style.css';

class Componente extends React.Component{
  constructor(props){
    super(props);

    this.state = ({numero:0, tabuada:[]});
  }

  obterDados = (e) => {
    let nome = e.target.name;
    let valor = e.target.value;

    this.setState({[nome]: valor})
  }

  // Função para realizar a tabuada
  tabuada = (e) => {
    e.preventDefault();

    // Vetor temporário
    let calculos = [];

    // Laço repetição
    for (let i=1; i<= 10; i++) {
      calculos.push(this.state.numero * i);
    }

    // Adicionar no state tabuada
    this.setState({tabuada:calculos});

  }
  render(){
    return(
      <Fragment>
        <form onSubmit={this.tabuada}>
          <input type='number' placeholder='Digite o numero' name='numero' onChange={this.obterDados} className='form-control'/>
          <input type='submit' className='btn btn-primary'/>
        </form>
        <ul>  
          {this.state.tabuada.map((n, i) => {
            return <li key={i}>{this.state.numero} X {i+1} = {n}</li>
          })}
        </ul>
      </Fragment>
    )
  }
}

ReactDOM.render(<Componente />, document.getElementById('root'));