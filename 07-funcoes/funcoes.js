// Versão 2: sintaxe ARROW FUNCTION
/* const calcularDobro = (valor) => {
    return valor * 2
} */

// Versão 3: sintaxe ARRROW FUNCTION com retorno implícito
/* Nesta versão, podemos omitir os parênteses (pois há somente UM parâmetro) e as chaves e return (pois há somente uma única ação sendo feita). */
const calcularDobro = valor => valor * 2

// Chamada da função (obs: sempre APÓS declarar a Arrow Function)
console.log(calcularDobro(10))

// Função callback (função como parâmetro de outra função)
const numeros = [10, 20, 5, 123]

// Versão 1: usando função callback nomeada/declarada
/* const numerosMultiplicados = numeros.map( function(numero){
    return numero * 3
}) */

// Versão 2: usando função callback arrow function
const numerosMultiplicados = numeros.map( numero => numero * 3)
    

console.log(numerosMultiplicados)