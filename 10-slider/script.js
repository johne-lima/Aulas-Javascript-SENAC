'use strict'

// Criando/configurando objeto de opções para o slider

const opcoes = {
    type: 'loop', // tipo de slides: loop
    autoplay: true, // trocar automaticamente
    interval: 2500, // tempo para trocar de slide
    // pagination: false, // as bolinhas em baixo

    // Design responsivo
    perPage: 3, // O Padrão
    gap: '1rem',
    breakpoints: {    // mediaquery so q no js
        800: { perPage: 2},
        600: { perPage: 1}
    }
}

// Criando e guardando o slider em memória
const slider = new Splide('.splide', opcoes);

// Ativando
slider.mount()