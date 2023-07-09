export default function SomaUm(props) {
    /*props.numero++
    Cannot assign to read only property 'numero' of object '#<Object>'
    Props são somente leitura
    */
    return(
        <div>
            <h1>{props.numero + 1 }</h1>
        </div>
    )
}