import Title from '../../components/Title'

function gerarLista(qtnd) {
    let lista = []
    for (let i = 0; i <= qtnd; i++) {
        lista.push(<li>{i}</li>)
    }
    return lista
}

export default function Treino() {
    return (
        <div>
            <Title description='Não' />
            <div>
                <ul>
                    {gerarLista(4)}
                </ul>
            </div>
        </div>
    )
}