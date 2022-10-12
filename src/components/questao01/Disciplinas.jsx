import React from 'react'

const Disciplinas = () => {

let disciplina = ["WEB", "Projeto Integrado", "Redes de Alta Velocidade"]

disciplina.map(disciplina => (
    <h2>{disciplina}</h2>

))
    return(
        <div>
               <h1>Disciplinas:</h1> {disciplina.map (disciplina => (
                    <h2>{disciplina}</h2>
                 ))}
        </div>
    )
}

export default Disciplinas 
