import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import './style.css';

class Componente extends React.Component{
  
  constructor(props){
    super(props);

    this.state = ({produto:'', valor:0, marca:'', vetor:[]});
  }

  teclado = (e) => {
    
    this.setState({[e.target.name]:e.target.value})
  }

  cadastrar = (e) => {
    e.preventDefault();

    let obj = {
      'produto' : this.state.produto,
      'valor' : this.state.valor,
      'marca' : this.state.marca
    }

    // Copia do vetor // nescessario para nao sobreescer os dados do vetor.
    let vetorTemp = this.state.vetor;


    // Adicionar o obj no vetorTemp // push coloca informação no ultimo espaço do vetor
    vetorTemp.push(obj);

    this.setState({vetor:vetorTemp});
  }

  //Função de remoção
  remover = (e) => {

    // Criar uma cópia do vetor
    let vetorTemp = this.state.vetor;

    // Remover o produto atrvés da posição
    vetorTemp.splice(e.target.value, 1);

    // Atualizar o vetor (state)
    this.setState({vetor:vetorTemp});

  }
  
  // Render do componente
  render(){
    return(
      <Fragment>
        <form onSubmit={this.cadastrar}>
          <input type='text'  onChange={this.teclado} placeholder='Nome do produto' name='produto' className='form-control'/>
          <input type='number' onChange={this.teclado} placeholder='Valor do produto' name='valor' className='form-control'/>
          <input type='text' onChange={this.teclado} placeholder='Nome da marca' name='marca' className='form-control'/>
          <input type='submit' value='Cadastrar' className='btn btn-primary'/>
        </form>

        <table className='table table-striped'>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Valor</th>
            <th>Marca</th>
            <th>Remover</th>
          </tr>
        </thead>

        <tbody>
          {this.state.vetor.map((p, i) =>{
            return(
              <tr key={i}>
                <td>{p.produto}</td>
                <td>{p.valor}</td>
                <td>{p.marca}</td>
                <td><button className='btn btn-danger' value={i} onClick={this.remover}>Remover</button></td>
              </tr>
            )
          })}
        </tbody>
        </table>
      </Fragment>
    )
  }


}

ReactDOM.render(<Componente />, document.getElementById('root'));