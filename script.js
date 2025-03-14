document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

        gsap.registerPlugin(ScrollTrigger);

    sections.forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });
    });
});
document.addEventListener('scroll', () => {
    const background = document.querySelector('.background-animation');
    if (window.scrollY > 50) {
        background.classList.add('blur-background');
    } else {
        background.classList.remove('blur-background');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const sideElementsContainer = document.createElement('div');
    sideElementsContainer.classList.add('side-elements');
    document.body.appendChild(sideElementsContainer);

        function createSideElement(side) {
        const element = document.createElement('div');
        element.classList.add('side-element', side);
        element.style.top = `${Math.random() * 100}vh`;         element.style.animationDuration = `${Math.random() * 5 + 5}s`;         element.style.opacity = Math.random() * 0.5 + 0.3;         sideElementsContainer.appendChild(element);

                setTimeout(() => {
            element.remove();
        }, 15000);     }

        setInterval(() => {
        createSideElement('left');         createSideElement('right');     }, 2000); });
document.addEventListener('mousemove', (e) => {
    const elements = document.querySelectorAll('.side-element');
    elements.forEach(element => {
        const x = (e.clientX / window.innerWidth) * 10;
        const y = (e.clientY / window.innerHeight) * 10;
        element.style.transform = `translate(${x}px, ${y}px)`;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const fallingElementsContainer = document.createElement('div');
    fallingElementsContainer.classList.add('falling-elements');
    document.body.appendChild(fallingElementsContainer);

        function createFallingElement() {
        const element = document.createElement('div');
        element.classList.add('falling-element');
        element.style.left = `${Math.random() * 100}vw`;         element.style.animationDuration = `${Math.random() * 5 + 10}s`;         element.style.opacity = Math.random() * 0.5 + 0.3;         element.style.width = `${Math.random() * 10 + 5}px`;         element.style.height = element.style.width;         fallingElementsContainer.appendChild(element);

                setTimeout(() => {
            element.remove();
        }, 15000);     }

        setInterval(createFallingElement, 500); });
document.addEventListener('mousemove', (e) => {
    const trailer = document.querySelector('.mouse-trailer');
    trailer.style.left = `${e.clientX}px`;
    trailer.style.top = `${e.clientY}px`;
});
window.addEventListener('load', () => {
    const loadingOverlay = document.querySelector('.loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.style.opacity = '0';         setTimeout(() => {
            loadingOverlay.remove();         }, 500);     }
});
let progress = 0;
const progressBar = document.createElement('div');
progressBar.classList.add('loading-progress');
document.body.appendChild(progressBar);

const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = `${progress}%`;
    if (progress >= 100) {
        clearInterval(interval);
        progressBar.style.opacity = '0';
        setTimeout(() => {
            progressBar.remove();
        }, 500);
    }
}, 200);
