// carrosel
let currentIndex = 0;
const images = document.querySelectorAll('.carrossel-imagem');
const totalImages = images.length;

function showImage(index) {
    const offset = -index * 100; // Cada imagem ocupa 100% do contêiner
    document.querySelector('.carrossel-container').style.transform = `translateX(${offset}%)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Volta ao início se chegar ao final
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Volta ao final se chegar ao início
    showImage(currentIndex);
}

// Mover automaticamente a cada 3 segundos
setInterval(nextImage, 3000);

// Adiciona eventos aos botões
document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('prev').addEventListener('click', prevImage);
