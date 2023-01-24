// Importar módulo React
import React from 'react';

// Componente
class Texto extends React.Component{
    render(){
        return <h1>Mensagem informada: {this.props.mensagem}</h1>
    }
}

// Exportar 
export default Texto;