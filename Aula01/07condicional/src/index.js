// Importações
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class Componente extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state = {exibir : false};
    }

    // Função para alterar o valor do state
    acao = () => {
        this.setState({exibir:!this.state.exibir})
    }

    // Render
    render(){

        // Variável contendo o valor se positivo ou falso
        let texto = '';

        // Condicional
        if (this.state.exibir === true) {
            texto = <h1>Hello World!</h1>                    
        }else{
            texto = <p>Nada para exibir</p>
        }

        return(
            <div>
                {texto}
                <button onClick={this.acao}>Clique Aqui</button>
            </div>
        )
    }
}

// Render
ReactDOM.render(<Componente/>, document.getElementById('root'));