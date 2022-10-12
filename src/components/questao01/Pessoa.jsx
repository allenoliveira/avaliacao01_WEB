import React from 'react'

export const Pessoa = ()=>{
    let name = "Mateus"
    let sobrenome = "Allen"
    let curso = "Redes de Computadores"  

    return (
        <div>
            <h1>
            Nome : {name}
                    <br/>
            Sobrenome : {sobrenome}
                    <br/>
            Curso : {curso}
                    <br/>
            </h1>
        </div>


    )
}

export default Pessoa
