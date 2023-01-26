import React, { Fragment } from 'react';
import ReactDom from 'react-dom';

//CSS
import './style.css';

// Componente
class Componente extends React.Component {

    //Construtor
    constructor(props) {
        super(props);

        this.state = ({ nome: '', idade: 0, vetor: [] });
    }

    // Função de teclado
    teclado = (campo) =>{
        let nome = campo.target.name;
        let valor = campo.target.value;

        this.setState({[nome]:valor});
    }

    // Função para cadastrar
    cadastrar = (e) =>{

        //Prevenir a ação action
        e.preventDefault();

        // Criar objeto
        let obj = {
            'nome' : this.state.nome,
            'idade' : this.state.idade
        }

        // Cópia do vetor
        let copiaVetor = this.state.vetor;

        // Adicionar obj no copiaVetor
        copiaVetor.push(obj);

        // Adicionar o copiaVetor no state do vetor
        this.setState({vetor:copiaVetor});
    }

    //Render
    render() {
        return (
            <Fragment>
                <form onSubmit={this.cadastrar}>
                    <input type='text' name='nome' placeholder='Informe o nome' onChange={this.teclado} />
                    <input type='text' name='idade' placeholder='Informe a idade' onChange={this.teclado} />
                    <input type='submit' value='Cadastrar' />
                </form>

                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Idade</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.vetor.map((obj, indice) => {
                            return(
                                <tr key={indice}>
                                    <td>{indice+1}</td>
                                    <td>{obj.nome}</td>
                                    <td>{obj.idade}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

//Render
ReactDom.render(<Componente />, document.getElementById('root'));