import { Component, useState } from "react";

export default class Contador extends Component {


    state = {
        numero: 1,
        /* utlizando props para inicializar um estado, */
        /* ?? representando um valor padrão, caso a props
         em questão não seja informado */
        passo: this.props.numero ?? 1
    }

    /* Lembrando que o this é chamado porque faz parte de Component */
    /* criando uma função */

    inc() {
        /* setState para modificar o estado*/
        /* passar um objeto com os atributos que queremos modificar */
        this.setState({
            numero: this.state.numero + (this.state.passo ?? 1)
        })
    }

    dec() {
        this.setState({
            numero: this.state.numero - (this.state.passo ?? 1)
        })
    }

    definirPasso = (even) => {
        this.setState({
            passo: +even.target.value
        })
    }

    /* Como não podemos passar parametros para o render
    utilizar o this.props para passar props*/

    /* this.state para acessar o estado interno */

    render() {
        return (
            <>
                <h1>Contador (usando Classe)</h1>
                <h2>{this.state.numero}</h2>
                <input type="number" min={1} max={900} value={this.state.passo} onChange={this.definirPasso} />
                <button onClick={() => this.inc()}>+</button>
                <button onClick={() => this.dec()}>-</button>
            </>
        )
    }
}