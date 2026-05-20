'use strict';

console.log('Exemplo 1: while (enquanto):\n')
/* Lógica: enquanto uma condição for VERDADEIRA, faça/execute ações/processos. */

// Variável de controle de repetição (contadora)
let contador = 1

while(contador <= 5) {
    console.log("Valor da variável: " +contador);
    contador++
}

console.log('\nExemplo 2: for (para):\n');
/* Lógica: executa uma série de ações a partit de um valor inicial até um valor final. */
for(let i = 1; i <= 10; i++) {
    console.log('I vale : ' +i)
}

console.log('\nExemplo 3: loog para acessar ARRAY:\n')
// Lógiga: executa ações enquanto existir dados no array

const bandas = ['Slayer', 'Nightwish', 'Rush', 'Metallica']
for (let i = 0; i < bandas.length; i++) {
    console.log('Nome das bandas: '+bandas[i])
}

const texto = 'olá'
for (let i = 0; i < texto.length; i++) {
    console.log(texto[i])
}

console.log('\NExemplo 4 for/of: loop específico para ARRAY:\n')
const alunos = ["Marcelo", "Alexandre", "Emillye", "Yuri", "Raquel"]

// Lógica: acessando cada aluno a partir do array alunos
for (const aluno of alunos) {
    console.log(aluno)
}

console.log('\n')

for (let banda of bandas) {
    console.log(banda)
}

console.log('\NExemplo 5 for/if: loop específico para OBJETOS:\n')

const pessoa = {
    nome: 'Seu Madruga',
    idade: 66,
    cidade: 'São Paulo'
}

// Lógica: acesso as propriedades do objeto pessoa
for(const propriedade in pessoa) {
    // console.log(propriedade) //Traz apenas o nome da propriedade.
    console.log(pessoa[propriedade]) //Traz os valores
    console.log(`${propriedade}: ${pessoa[propriedade]}`) //Traz os valores e as propriedades
}