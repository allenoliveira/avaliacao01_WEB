/*

import React, {Component} from 'react';
import axios from 'axios';
import { useState, useEffect } from  'react'

const Pais = () => {
const [name, setName] = useState('')
const [population, setPopulation] = useState(0)
   
useEffect=(() => {
try{
        async function getAllResults(){
            const response = await axios.get(`https://restcountries.com/v2/region/africa?fields=${population}`)
            setName(response.data.results)
        }
        getAllResults()
         }catch (error){
            console.log(error)
         }
            }, [name])
          return (
            <div>
                 <button onClick={() => setPopulation(1000)}></button>
                <ul>
                    {population.map(item => (
                    
                  <li>
                     {item.population}
                  </li>
                    )) }
              </ul>
            </div>
           );
          

}
export default Pais

*/