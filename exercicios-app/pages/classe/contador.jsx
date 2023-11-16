import { Component } from "react";
import Contador  from '../../components/Contador'

/*  Componente baseado em Classe,
Criar uma classe importando o Component 
Contador herdando de Component   */

export default class ContadorPage extends Component {


    /* metodo responsavel por renderizar */
    render() {
        return (
            <div>
                <Contador valorInicial={100}/>
            </div>
        )
    }
}