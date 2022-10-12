import { Routes, Route } from 'react-router-dom'


import Pessoa from '../questoa01/Pessoa'
import Infor from '../questao01/Infor'


const PessoaRota = ()=>{
    return (
        <Routes>
            <Route path="nome" element={<Pessoa />} />
            <Route path="sobrenome" element={<Pessoa />} />
            <Route path="curso" element={<Pessoa />} />
        </Routes>
    )
}

export default PessoaRota