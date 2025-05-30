const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length -1 : currentSlide - 1;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide === slides.length -1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
});

// Mostrar la primera slide al cargar
showSlide(currentSlide);
