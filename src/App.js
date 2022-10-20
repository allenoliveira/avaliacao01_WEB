import './App.css';
import React from 'react'

import PaisesCont from './components/questao05/PaisPop'
import Pokemon from './components/questao03/Pokemon'
import Paises from './components/questao04/Paises'
import Questao01A from './components/questao01/Questao01A'
import Questao01B from './components/questao01/Questao01B'
import Questao01 from  './components/questao01/Questao01'
import Calculadora from  './components/questoa02/Calculadora'
function App() {
      
  return (
    <div className="App">
    
    <h1>Questão 01 - Dados do Estudante</h1>
    <Questao01>
      <Questao01A />
      <Questao01B />  
    </Questao01>    
    <br/>
    <h1>Questão 02 - Calculadora</h1>
    <br />
    <Calculadora />
    <h1>Questão 03 - Pokemon</h1>
    <Pokemon />
    <br />
    <h1>Questão 04 - Países da África Populoso</h1>
    <br/>
    <Paises />
    <h1>Questão 05 - Pais Mais Populosos e Menos Populoso</h1>
    <PaisesCont />

    </div>
  )
}

export default App;
