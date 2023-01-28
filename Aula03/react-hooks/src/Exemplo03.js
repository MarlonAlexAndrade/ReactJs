// Importações
import React, { useEffect, Fragment, useState } from 'react';

// Componente
export default function Exemplo03({ titulo }) {

    // State
    const [vetor, setVetor] = useState([]);

    //useEffect - Executa após o render ser realizado
    useEffect(() => {
        
            fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(retorno => retorno.json())
            .then(postagens => setVetor(postagens));
        }, []);

// Render
return (
    <Fragment>
        <h1>{titulo}</h1>

        <ul>
            {vetor.map(obj => {
                return (
                    <li key={obj.title}>
                        <p>{obj.title}</p>
                    </li>
                )
            })}
        </ul>
    </Fragment>
)
}

// Exportar componente
