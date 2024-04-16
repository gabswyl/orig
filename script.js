window.onload = function() {
    const trackSlider = document.querySelector('.track-slider');
    const carouselImg = document.querySelector('.carrouselimg');
    const slides = document.querySelectorAll('.carrouselimg li');

    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth;
    const carouselWidth = totalSlides * slideWidth;
    let currentPosition = 0;

    // Clone os slides para torná-lo infinito
    for (let i = 0; i < totalSlides; i++) {
        const cloneSlide = slides[i].cloneNode(true);
        carouselImg.appendChild(cloneSlide);
    }

    function updateCarouselPosition() {
        carouselImg.style.transform = `translateX(-${currentPosition}px)`;
    }

    function nextSlide() {
        currentPosition += slideWidth;
        if (currentPosition >= carouselWidth) {
            currentPosition = 0;
        }
        updateCarouselPosition();
    }

    function prevSlide() {
        currentPosition -= slideWidth;
        if (currentPosition < 0) {
            currentPosition = carouselWidth - slideWidth;
        }
        updateCarouselPosition();
    }

    // Previous and next button event listeners
    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);
};

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-origamid');
    if (window.scrollY > 500) {
        header.classList.add('ativo');
    } else {
        header.classList.remove('ativo');
    }
});


const loader = document.querySelector('.loader')
const fechar = document.querySelector('.close')
const elementosativo = document.querySelector('.elementosativo')

loader.addEventListener('click', () => {

    elementosativo.classList.add('ativo')
    loader.classList.add('ativo')
    fechar.classList.add('ativo')
})

fechar.addEventListener('click', () => {
    elementosativo.classList.remove('ativo')
    loader.classList.remove('ativo')
    fechar.classList.remove('ativo')
})




const titlefaq = document.querySelectorAll('.titlefaq');

titlefaq.forEach((title) => {
    title.addEventListener('click', (e) => {
        const element = e.target;
        const desc = element.nextElementSibling;

        // Encontrar o elemento ativo atualmente
        const elementoAtivo = document.querySelector('.titlefaq.ativo');

        // Remover a classe 'ativo' do elemento ativo atualmente, se existir
        if (elementoAtivo) {
            elementoAtivo.classList.remove('ativo');
            elementoAtivo.nextElementSibling.classList.remove('ativo');
        }

        // Adicionar a classe 'ativo' ao elemento clicado e ao seu próximo elemento irmão
        element.classList.add('ativo');
        desc.classList.add('ativo');
    });
});