export default function Filho(props) {

    console.log(props.funcao)
    /* o filho esta passando uma informação para o elemento pai

    No primeiro caso é passado o evento
    No segundo caso é passado o paramentro através da função anonima
    
    */
   
    return (
        <div>
            <h1>Filho #</h1>
            <button type="button" onClick={props.funcao}>Button</button>
            <button type="button" onClick={() => props.funcao("Passei no Enem!")}>Button</button>
        </div>
    )
}