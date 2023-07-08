/*
Gerar lista dentro da div

    <div>
        <span>1,</span>
        <span>2,</span>
        <span>3,</span>
        <span>4,</span>
        <span>5,</span>
        ..
    </div>

*/



function gerarLista(final = 10) {
    let list = []
    for(let i = 1; i < final; i++) {
        // não esquecer do {} na sintaxe
        list.push(<span>{i},</span>)
    }
}

export default function Lista() {
    return (
        <div>
            {gerarLista()}
        </div>
    )
}
