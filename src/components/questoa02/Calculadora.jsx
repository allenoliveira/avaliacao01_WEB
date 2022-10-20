
import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const Calcular = () => {
    
    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)
    const [resultado, setResultado] = useState(0)

    const div = ()=> {
        setResultado(parseFloat(numero1) / parseFloat(numero2))
    }
     const somar = ()=> {
        setResultado(parseFloat(numero1) + parseFloat(numero2))
     }
     const subt = () => {
            setResultado(parseFloat(numero1) - parseFloat(numero2))
     }
      const multi = ()=> { 
            setResultado(parseFloat(numero1) * parseFloat(numero2)) 
      }

    return(

        <div>
            <table className="table table-bordered table-dark">
                <tr>
                    <td>
                    <h1>Faça a sua Operação </h1>
                    <label>Valor 01: </label>
                    <input 
                    type="number"
                    valor={numero1}
                    onChange={(ms)=> setNumero1(ms.target.value)} />
                


                    <label>Valor 02: </label>
                    <input 
                    type="number"
                    valor={numero1}
                    onChange={(ms)=> setNumero2(ms.target.value)} />
                    </td>
                </tr>
                <br/>
           <div>
           <button className='btn btn-danger' onClick={somar} > + </button>
           <button className='btn btn-danger' onClick={div} > / </button>
           <button className='btn btn-danger' onClick={multi} > * </button>
           <button className='btn btn-danger' onClick={subt} > - </button>
           </div>
           <label>
            Resultado : {resultado}
           </label>
           </table>
        </div>
                )
}

export default Calcular