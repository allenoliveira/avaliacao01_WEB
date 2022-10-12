import React, {useState, useEffect} from 'react'

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

      useEffect(()=>{
        setResultado(somar())
    }, [numero1,numero2])

    return(

        <div>
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

           <div>
           <button onClick={somar} > + </button>
           <button onClick={div} > / </button>
           <button onClick={multi} > * </button>
           <button onClick={subt} > - </button>
           </div>
           <label>
            Resultado : {resultado}
           </label>
        </div>
                )
}

export default Calcular