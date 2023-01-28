// Importações
import React, {useState, Fragment} from 'react';

//Componente
function Exemplo02(){

    //useState
    const [nome, setNome] = useState('');
    const[vetor, setVetor] = useState([]);

    // Função de cadastro
    let cadastrar = (e) => {

        // Não atualizar a página
        e.preventDefault();

        // Adicionar nome no vetor
        setVetor([...vetor, nome]);
    }

    

    //Render
    return(
        <Fragment>
            <form onSubmit={cadastrar}>
                <input type='text' placeholder='Informe o nome' onChange={e => {setNome(e.target.value)}} />
                <input type='submit' value='Cadastrar' />
            </form>

            <ul>
                {vetor.map(nome =>{
                    return(<li>{nome}</li>)
                })}
            </ul>
        </Fragment>
    )
}

//Exportar componente
export default Exemplo02;