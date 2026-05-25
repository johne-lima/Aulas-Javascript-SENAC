const container = document.querySelector('.container')
const inputNota1 = document.querySelector('#nota1')
const inputNota2 = document.querySelector('#nota2')
const buttonEnviar = document.querySelector('#enviar')
const mostrarMedia = document.querySelector('#media')
const mostrarSituacao = document.querySelector('#situacao')
const resultado = document.querySelector('#resultados')
let media


container.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const nota1 = Number(inputNota1.value)
    const nota2 = Number(inputNota2.value)
    
    media = (nota1 + nota2) / 2

    resultado.classList.toggle('aprovado', media >= 7)
    resultado.classList.toggle('reprovado', media < 7)
    
    mostrarMedia.textContent = `Média: ${media}`
    var result = media > 7 ? mostrarSituacao.textContent = 'Aprovado' : mostrarSituacao.textContent = 'Reprovado'        
})
