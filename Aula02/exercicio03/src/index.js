import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import './style.css';
class Componente extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({ valor: 0, pagamento: 0 });
  }

  obterDados = (e) => {
    let nome = e.target.name;
    let valor = e.target.value;

    this.setState({ [nome]: valor });
  }

  calcular = (e) => {
    e.preventDefault();

    // Condicional
    if (parseFloat(this.state.pagamento) === 0) {
      alert('Favor informar o tipo do pagamento!');
    } else if (parseFloat(this.state.pagamento) === 1 && this.state.valor >= 100) {
      alert(`Desconto de 10%, total a pagar R$ ${this.state.valor * 0.9}`);
    } else {
      alert(`Pagamento integral, total a pagar R$ ${this.state.valor}`);
    }

  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.calcular}>
          <input type='number' placeholder='Digite o valor' name='valor' onChange={this.obterDados} className='form-control' />

          <select className='form-control' name='pagamento' onChange={this.obterDados}>
            <option value='0'>Forma de pagamento</option>
            <option value='1'>Pagamento á vista</option>
            <option value='2'>Pagamento á prazo</option>
          </select>

          <input type='submit' className='btn btn-primary' />
        </form>
      </Fragment>
    )
  }
}


ReactDOM.render(<Componente />, document.getElementById('root'));