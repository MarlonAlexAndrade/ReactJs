// Importar módulos
import React, {Fragment, useState} from 'react';

// Função
function Exemplo01(){

    // useState (state + setState)
    const [nome, setNome] = useState();

    // Render
    return(
        <Fragment>

            <input type='text' onChange={e => setNome(e.target.value)}/>

            <hr/>

            <h1>{nome}</h1>
            
        </Fragment>
    )

}

// Exportar componente
export default Exemplo01;