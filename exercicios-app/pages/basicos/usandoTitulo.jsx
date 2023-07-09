import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
    return (
        <div>
        <Titulo 
        mainText="Página de Cadastro"
        description="Incluir, alterar e excluir coisas!"
        tiny={true}
        />
        <Titulo 
        mainText="Página de Login"
        description="Informe o seu e-mail e senha"
        />
        </div>
    )
}