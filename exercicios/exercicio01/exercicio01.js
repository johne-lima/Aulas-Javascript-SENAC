// Etapa A
let numero1 = 1000;
let numero2 = 100;

// Etapa B
let soma = numero1 + numero2;

// Etapa C
let subtracao = numero1 - numero2;

// Etapa D
let multiplicacao = numero1 * numero2;

// Etapa E
let divisao = numero1 / numero2;

// Etapa F
console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);

/* Desafio: calcular a média dos resultados */

// Solução 1: fazendo de uma vez (atenção aos parênteses)
// let media = (soma + subtracao + multiplicacao + divisao) / 4;

// Solução 2: fazendo por partes (primeiro soma, depois divide)
let total = soma + subtracao + multiplicacao + divisao;
let media = total / 4;

console.log(media);