// Selecciona todas las imágenes del slider
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Función para cambiar de imagen
function changeSlide() {
    // Ocultar la imagen actual
    slides[currentSlide].classList.remove('active');

    // Cambiar al siguiente slide
    currentSlide = (currentSlide + 1) % slides.length;

    // Mostrar el nuevo slide
    slides[currentSlide].classList.add('active');
}

// Cambiar las imágenes cada 3 segundos
setInterval(changeSlide, 3000);


