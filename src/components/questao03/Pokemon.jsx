import { useState, useEffect } from "react"
// import { listaEstudante } from  './data'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'


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
    

            const Generate = ()=>{
                return pokemon.map( 
                    (desmep, index) => {
                        desmep.key = index
                        return(
                            <tr>
                                <td>
                                    {desmep.name}
                                </td>
                            </tr>
                        )
                    }
                )
                }
    
    return (
        <div>
        <button className="btn btn-primary" onClick={() => setOffset(prev => prev + 10)}> Mostrar mais 10 Pokemons </button>
        <table className="table table-bordered table-dark">
            <thead>
                <tr>
                    <th> Pokemons </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <center>
                            {Generate()}
                    </center>
                </tr>
            </tbody>
        </table>
        </div>
    )
}


export default Pokemon