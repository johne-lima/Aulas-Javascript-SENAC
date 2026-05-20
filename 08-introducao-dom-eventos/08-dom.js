'use strict'

// Funções/métodos de seleção de elementos
const pValor = document.querySelector('#valor')
const botaoSomar = document.querySelector('#somar')
const botaoSubtrair = document.querySelector('#subtrair')

// console.log(pValor)
// console.log(botaoSomar)
// console.log(botaoSubtrair)

/* Sobre Event Listener
Sempre que quisermos trabalhar com interações de qualuqe ratureza em nossa página, é necessário um ouvinte de evento (addEventListener) ao elemento que deesejamos manipular. E quando o evento acontecer, uma função callback é a responsável por executar as ações que queremos. */

botaoSubtrair.disabled = true

let contador = 0

botaoSomar.addEventListener('click', () => {
    contador++
    botaoSubtrair.disabled = false
    if (contador == 10) {
        botaoSomar.disabled = true
    }

    pValor.textContent = contador
})

botaoSubtrair.addEventListener('click', () => {
    contador--

    if (contador === 0) { botaoSubtrair.disabled = true }

    pValor.textContent = contador
})

// Exemplo 02

const imgFoto = document.querySelector('.foto')

const botoesDeFoto = document.querySelectorAll('[data-foto')


// Percorrer os elementos do array de botões (NodeList)
for (const botao of botoesDeFoto) {

    // Para cada botão, monitorar o evento de clique
    botao.addEventListener('click', () => {
        const imagem = botao.dataset.foto
        const texto = botao.dataset.texto

        imgFoto.src = imagem
        imgFoto.alt = texto
    })
}

// Exemplo 03
const textareaMensagem = document.querySelector('#mensagem')
const spanContadorCaracteres = document.querySelector('#contador')

textareaMensagem.addEventListener('input', () => {
    let totalCaracteres = textareaMensagem.value.length
    spanContadorCaracteres.textContent = totalCaracteres

    if(totalCaracteres >= 100) {
        spanContadorCaracteres.classList.add('excesso')
    } else {
        spanContadorCaracteres.classList.remove('excesso')
    }
})