// Importações 
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class Componente extends React.Component {

  // Construtor
  constructor(props){
    super(props);

    this.state = {texto : ''};
  }

  // Função de mensagem #1
  mensagem(){
    alert('Hello World');
  }

  // Função exibirNome #2
  exibirNome(nome){
    alert(`Boa noite ${nome}`);
  }

  // Função exibirIdade #3
  exibirIdade(idade){
    alert(`Você tem ${idade} anos.`);
  }

  // Função de teclado
  teclado = (obj) => {
    console.log(obj.target.value);
    this.setState({'texto' : obj.target.value})
  }

  // Render
  render(){
    return(

    <div>

      <button onClick={this.mensagem}>Executar 1ª função</button>
      <button onClick={this.exibirNome.bind(this, 'Marlon')}>Executar 2ª função</button>
      <button onClick={() => this.exibirIdade(25)}>Executar 3ª função</button>

      <hr/>

      <h1>{this.state.texto}</h1>
      <input type='text' placeholder='Escreva algo...' onChange={this.teclado}/>
    </div>
  )}
}

// Render
ReactDOM.render(<Componente />, document.getElementById('root'));