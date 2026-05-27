const opcoes = {
    captions: true, // Define se terá legenda
    captionSelector: 'img', // De onde vai pegar a legenda
    captionsData: 'alt', // selecionar o atributo
    overlayOpacity: 0.8, // Por padrão
    loop: true,
    animationSpeed: 250,

    autoplay: true,
    type: 'loop',
    interval: 2000
}

const lightbox = new SimpleLightbox('.gallery a', opcoes)
new Splide ('.splide', opcoes).mount()