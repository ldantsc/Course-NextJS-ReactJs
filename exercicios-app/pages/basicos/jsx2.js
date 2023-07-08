

let array = [<li>Paulo</li>, <li>Ana</li>, <li>Pedro</li>]
let name = [<li>Lucas</li>, <li>Felipe</li>]
array.unshift(name)



export default function jsx2() {
    const conteudo = (
        <div>
        <h1>JSX #02</h1>
        <ul>
            {array}
        </ul>
    </div>
    )   
    return conteudo;
}
