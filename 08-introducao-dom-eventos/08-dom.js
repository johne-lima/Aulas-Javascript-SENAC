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
    if (contador >= 10) {
        botaoSomar.disabled = true
    }

    pValor.textContent = contador
})

botaoSubtrair.addEventListener('click', () => {
    contador--
    botaoSomar.disabled = false
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
const spanContadorRegressivo = document.querySelector('#regressivo')

textareaMensagem.addEventListener('input', () => {
    let totalCaracteres = textareaMensagem.value.length

    const limiteMaximo = 100
    const contagemRegressiva = limiteMaximo - totalCaracteres

    spanContadorRegressivo.textContent = contagemRegressiva
    spanContadorCaracteres.textContent = totalCaracteres

    if (totalCaracteres <= 40) {
        textareaMensagem.style.background = 'rgb(53, 254, 166)'
    } else if (totalCaracteres <= 70) {
        textareaMensagem.style.background = 'yellow'
    } else if (totalCaracteres >= limiteMaximo) {
        spanContadorCaracteres.classList.add('excesso')
        textareaMensagem.style.background = 'pink'
    } else {
        spanContadorCaracteres.classList.remove('excesso')
    }
})

// Exemplo 04
const kbdteclaPressionada = document.querySelector('#tecla kbd')
const pagina = document.body

// Monitoramento de envetos de teclado sempre a partir do document
document.addEventListener('keyup', (e) => {
    // Capturando a telc ausada a partir do event.key
    const teclaUsada = e.key
    console.log(teclaUsada)

    kbdteclaPressionada.textContent = teclaUsada

    if(teclaUsada === 'a') {
        kbdteclaPressionada.style.background = 'blue'
        kbdteclaPressionada.style.color = 'white'

        pagina.style.background = 'yellow'
        pagina.style.transition = '2s'
    }
    
    if (teclaUsada === 'Escape') {
        kbdteclaPressionada.style.color = 'black'
        kbdteclaPressionada.style.background = 'transparent'
        pagina.style.background = '#f4f4f4'
    }
})

// Exemplo 05

const inputTarefa = document.querySelector('#tarefas')
const botaoAdicionar = document.querySelector('#adicionar')
const listaTarefas = document.querySelector('#lista')

botaoAdicionar.addEventListener('click', () => {
    const tarefaDigitada = inputTarefa.value

    // Se não for digitada nenhuma tarefa, interrompa a função
    if(tarefaDigitada === '') return

    // Criar o elemento <li>
    const item = document.createElement('li')

    // Adicionando o conteúdo (tarefa digitada) ao novo item <li>
    item.textContent = tarefaDigitada

    // Interindo o novo <li> na lista
    listaTarefas.appendChild(item)
    
    inputTarefa.value = ''
    inputTarefa.focus() //Devolvendo o foco (cursor)

    item.addEventListener('click', () => {
        item.classList.toggle('feito')
    })

    // Criar elemento remover
    const remover = document.createElement('button')
    remover.textContent = 'Deletar'

    item.appendChild(remover)

    remover.addEventListener('click', () => {
        item.remove()
    })
})

inputTarefa.addEventListener('keyup', (e) => {
    if(event.key === 'Enter') botaoAdicionar.click()
})