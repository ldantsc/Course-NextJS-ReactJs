import Estilo from "../../components/Estilo";

export default function usandoEstilo() {
    return (
        <div>
            <Estilo numero={3} />
            <Estilo numero={-13} color="#FF0" direita/>
        </div>
    )
}

/* Só passar a propriedade considera como true, não precisa utilizar o valor 'true' = direita={true} */