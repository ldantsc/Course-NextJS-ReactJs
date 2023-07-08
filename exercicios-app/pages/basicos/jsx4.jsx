const subtitulo = "Estou no Javascript!"
const trecho = <h3>{5*5}</h3>

// {{}} = double mustache - comum nas frameworks angular - vue.js
// {} = react utiliza apenas um par de chaves para integração JS

export default function jsx4() {
    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            <h3>{3*3}</h3>
            {trecho}
            <h4>{Math.max(13, 29)}</h4>
            <h5>{entre(30, 1, 20)}</h5>
        </div>
    )
}

function entre(valor, min, max) {
    if(valor >= min && valor <= max) {
        return "Sim"
    } return "Não"
}