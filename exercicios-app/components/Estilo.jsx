export default function Estilo(props) {

    const classeAplicada = props.numero >= 0 ? "azul" : "vermelha"

    return (
        <div>
            <h1 style={{backgroundColor: props.numero >= 0 ? "#2D2" : "#D22 ", color: props.color, textAlign: props.direita ? "right" : "left"}}>
                Texto #01
            </h1>
            <h2 className={classeAplicada}>
                Texto #2
            </h2>
        </div>
    )
}

/* {{}} = primeira chave definindo colocar javascript, segunda chave = objeto */