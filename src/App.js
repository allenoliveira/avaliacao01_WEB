import logo from './logo.svg';
import './App.css';
import { Pessoa } from './components/questao01/Pessoa';
import Disciplinas from './components/questao01/Disciplinas'
import Pessoa02 from './components/questao01/Pessoa02';
import Calculadora from './components/questoa02/Calculadora'
import Pokemon from './components/questao03/Pokemon';
/*import Pais from './components/questao04/Paises'; */

function App() {
      
  return (
    <div className="App">
    
    <h1>Questão 01</h1>
    <br/>
    <Pessoa />
    <Pessoa02 />
    <Disciplinas />
    <br/>
    <h1>Quetão 02 - Calculadora</h1>
    <br/>
    
    <Calculadora />
    <br/>
    <h1>Questão 03 - Pokemons</h1>
    <br/>
    <Pokemon />
    <br/>
    <h1>Questão 04 - Países da África Populosos</h1>
    <br/>
    
    <h1>Questão 05 - Pais Mais Populosos e Menos Populsos</h1>


    </div>
  )
}

export default App;
