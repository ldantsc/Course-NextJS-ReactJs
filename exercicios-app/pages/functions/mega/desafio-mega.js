export function mega(quantidade = 6, numeros = []) {

    /* Garantir que o dado seja um number */

    /*
    quantidade = parseInt(quantidade)
     */

    /* utlizando o + a frente de quantidade ja converte uma string em number */
    quantidade = +quantidade
    
    /* Verificar se o numero for menor que 6 e maior que 60, lance o erro de valor inválido */

    if(quantidade < 6 && quantidade > 60) {
        throw "Valor inválido";
    }
    
    /* condição de parada da recursividade, se o numero de elementos do array for igual a quantidade,
    retornar o array, utilizando o sort para ordenar o array */

    if(numeros.length === quantidade) {
        return numeros.sort((n1, n2) => {return n1  - n2})
    }
    
    /* Criando um numero aleatório com math random */
    let numeroAleatorio = parseInt(((Math.random() * 60)) + 1)

    /* Verificando se o numero dentro do array ja existe, se não existir 
    colocar o numero no array, e fazer novamente a chamada da função */

    /* Se existir o número, não colocar este numero no array
    apenas chame a função novamente */
    
    if(!numeros.includes(numeroAleatorio)) {
        numeros.push(numeroAleatorio)
        return mega(quantidade, numeros)
    } else {
        return mega(quantidade, numeros)
    }
}

console.log(mega())