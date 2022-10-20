
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import  { useState, useEffect } from  'react'

const Paises = () => {
const [pais, setPais] = useState([])
   
useEffect(
  () => {
                axios.get(`https://restcountries.com/v2/region/africa?fields=name,population` )
            .then(
              (msg) => {
            setPais(msg.data)
        }
          ).catch ((error) => {
            console.log(error)
         }
      )
        }, []
)
    
    const getMaiorPopulation = () => {
      let maiorPopulation = 0
      let getName = ''
      pais.forEach((country) =>{
          if(country.population > maiorPopulation){
            maiorPopulation = country.population
            getName = country.name
          }
    })

          return (
            <tr>
                    <h3> País mais populoso </h3>
                     {getName}
                  
                    <h3>População</h3>
                     {maiorPopulation}
              
              <h2>A {getName} tem a maior população da África, com cerca de {maiorPopulation} de habitantes</h2>
            </tr>
          )
    }
      return (
        <div>
            <table className="table table-bordered table-dark">
            <thead>
                <tr>
                    <th>País</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <center>
                            {getMaiorPopulation()}
                    </center>
                </tr>
            </tbody>
        </table>
        </div>
      )
  }
 
  export default Paises