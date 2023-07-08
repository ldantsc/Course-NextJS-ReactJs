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
        const total = 10;
        const list = Array.from({length: total}, (_, index) => index + 1)
       
export default function lista2() {
    return (
        <div>
            <h1>oi</h1>
            {list.map((valor) => <span key={valor}>{valor}</span>)}
        </div>
    )
}
