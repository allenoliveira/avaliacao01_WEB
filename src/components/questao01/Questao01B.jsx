import React from 'react'

const Questao01B = () => {

let disciplina = ["WEB", "Projeto Integrado", "Redes de Alta Velocidade"]

disciplina.map(disciplina => (
    <h2>{disciplina}</h2>

))
    return(
        <div>
               <h1>Disciplinas que estou matriculado :</h1> {disciplina.map (disciplina => (
                    <h2>{disciplina}</h2>
                 ))}
        </div>
    )
}

export default Questao01B 
