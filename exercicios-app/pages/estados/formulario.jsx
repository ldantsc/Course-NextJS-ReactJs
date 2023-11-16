import { useState } from "react"

export default function Formulario() {

    const [valor, setValor] = useState("inicial")
 
    function alterarInput() {
        setValor(valor + "!")
    }

    /* Componentes controlados, a partir do momento em que você insere algum valor no input
    o onChange captura o evento proprio, pega o valor, e reflete no estado do componente */

    return (
        <div>
            .
            <input type="text" value={valor} onChange={(even) => setValor(even.target.value)}/>
            <h1>{valor}</h1>
            <button onClick={alterarInput}>test</button>
        </div>
    )
}