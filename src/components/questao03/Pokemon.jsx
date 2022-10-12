import { useState, useEffect } from "react"
// import { listaEstudante } from  './data'
import axios from "axios"


const Pokemon = ()=> {

    const [pokemon, setPokemon] = useState([])
    const [offset, setOffset] = useState(0)
    
    useEffect(() =>{
        try{
            async function getAllResults(){
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
                setPokemon(response.data.results)
            }
            getAllResults()
             }catch (error){
                console.log(error)
             }
            }, [offset])
    
    return (
        <div>
        <button  onClick={() => setOffset(prev => prev + 10)}></button>
        <ul>
            {pokemon.map(item => (
        <li>
            {item.name}
        </li>
        ))}
        </ul>
        </div>
    )
}


export default Pokemon