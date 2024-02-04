const images = document.querySelectorAll('.image');
let index = 0;

function switchImage() {
    images[index].classList.remove('active');

    index = (index + 1) % images.length;

    images[index].classList.add('active');
}

setInterval(switchImage, 3000);