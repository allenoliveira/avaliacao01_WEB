import axios from "axios"
import { useEffect, useState } from "react"

const PaisPop = () => {

  const [pais, setPais] = useState([])
  const [continent, setContinent] = useState('')

  useEffect(
    () => {
      axios.get(`https://restcountries.com/v2/region/${continent}?fields=name,population`)
        .then(
          (res) => {
            setPais(res.data)
          }
        ).catch(
          (err) => {
            console.log(err)
          }
        )
    }, [continent]
  )

  const getMaiorPopupacao = () => {

    let maiorPopulation = 0
    let getName = ''
    pais.forEach((country) => {
      if (country.population > maiorPopulation) {
        maiorPopulation = country.population
        getName = country.name
      }
    })
     return(
        <tbody>
            <tr>
                
                    <h4> População - Maior</h4>
                    {maiorPopulation}
                
                    <h4> País mais populoso </h4>
                    {getName}
                
            </tr>
          </tbody>
     )
  }

  const getMenorPopulacao = () => {

    let menorPopulation = 0
    let getName = ''
    pais.forEach((country, index) => {
        if (index === 0) {
            menorPopulation = country.population
        }

        if (country.population < menorPopulation) {
            menorPopulation = country.population
            getName = country.name
        }
    })
     return(
        <tbody>
            <tr>
              
                    <h4> Populaçao - Habitantes</h4>
                    {menorPopulation}
                
                    <h4> País menos populoso</h4>
                    {getName}
                
            </tr>
        </tbody>
     )

  }

  const Result = () => {
    if (continent === 'americas') {
        return getMaiorPopupacao()
    } else {
        return getMenorPopulacao()
    }
  }

  return (
    <div>
        <h4> Escolha uma região clicando em um dos botôes abaixo </h4>
        <button className="btn btn-danger" onClick={(event) => {setContinent('americas')}}> América </button>
        <button className="btn btn-danger" onClick={(event) => {setContinent('asia')}}> Ásia </button>
        <table className="table table-bordered table-dark">
            <thead>
                <tr>
                    <th> Paises </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <center>
                            {Result()}
                    </center>
                </tr>
            </tbody>
        </table>
    </div>

  )

}

export default PaisPop