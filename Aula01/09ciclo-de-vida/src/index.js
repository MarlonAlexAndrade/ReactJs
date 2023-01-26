// Importações
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class Componente extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state = ({nome:'Ana'});
    }

    // Ciclo de vida - componentDidMount
    componentDidMount(){

        // Tempo
        setTimeout(() => {
            this.setState({nome:'Letícia'});
        }, 3000);
    }

    // Render
    render(){
        return <h1>{this.state.nome}</h1>
    }
}

// Render do projeto
ReactDOM.render(<Componente/>, document.getElementById('root'));