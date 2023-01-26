// Importações
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

// CSS
import './style.css';

//Componente
class Componente extends React.Component {

  // Construtor
  constructor(props){
    super(props);

    this.state = {nota1:0, nota2:0, retorno:''};
  }

  // Função de ação
  acao = (e) =>{
    // Não atualizar a página
    e.preventDefault();

    // Realizar a média
    let media = (parseFloat(this.state.nota1) + parseFloat(this.state.nota2)) / 2;

    // Realizar a situação(operador ternário)
    let situacao = media >= 7 ? 'Aprovado' : 'Reprovado';

    // Retorno
    let mensagem = `O aluno obteve a média ${media} e sua situação é: ${situacao}`;
    this.setState({retorno:mensagem});
  }

  // Função de teclado
  teclado = (campo) =>{
    let nome = campo.target.name;
    let valor = campo.target.value;

    this.setState({[nome]:valor});
  }

  // Render
  render() {
    return (
      <Fragment>
        <form onSubmit={this.acao}>
          <input type='number' placeholder='1ª nota' name='nota1' onChange={this.teclado} className='form-control' />
          <input type='number' placeholder='2ª nota' name='nota2' onChange={this.teclado} className='form-control' />
          <input type='submit' value='Enviar' className='btn btn-secondary' />
        </form>

        <h1>{this.state.retorno}</h1>
      </Fragment>
    )
  }
}
// Render
ReactDOM.render(<Componente />, document.getElementById('root'))