// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('header nav');

hamburger.addEventListener('click', () => {
    
    nav.classList.toggle('active');
    console.log(nav)
});






// Gallery Slider
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider .image-box');
const prevBtn = document.querySelector('.slider .prev');
const nextBtn = document.querySelector('.slider .next');

let currentIndex = 0;

function showImage(index) {
    images.forEach((img, idx) => {
        img.style.display = idx === index ? 'inline-block' : 'none';
    });
}

showImage(currentIndex);

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});
