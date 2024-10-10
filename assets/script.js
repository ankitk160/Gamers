// Script to show active item in navbar
const navItems = document.querySelectorAll('#nav-item li');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(li => li.style.fontWeight = '400');

        item.style.fontWeight = '700';
    });
});

// Script to show menu options in mobile view only
const menuToggler = document.getElementById('menu-toggler');
const navItem = document.getElementById('nav-item');

menuToggler.addEventListener('click', () => {
    navItem.classList.toggle('active');
});

// Script to animate slider
let currentIndex = 0;
const slides = document.querySelectorAll("#slider > div");
const totalSlides = slides.length;

function moveSlides() {
    // Reset classes
    slides.forEach((slide, index) => {
        slide.classList.remove("slide-left", "slide-center", "slide-right");
        if (index === currentIndex) {
            slide.classList.add("slide-left");
        } else if (index === (currentIndex + 1) % totalSlides) {
            slide.classList.add("slide-center");
        } else if (index === (currentIndex - 1 + totalSlides) % totalSlides) {
            slide.classList.add("slide-right");
        }
    });

    // Move to the next slide
    currentIndex = (currentIndex + 1) % totalSlides;
}

setInterval(moveSlides, 3000);

// Script to animate ninja character
document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('ninja-components');

    function toggleClass() {
        setTimeout(() => {
            element.classList.add('active');

        }, 1000);
        element.classList.remove('active');
    }
    setInterval(toggleClass, 2000);
});
