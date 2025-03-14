document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    // GSAP Scroll Animations
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
// Add this JavaScript
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

    // Create side elements
    function createSideElement(side) {
        const element = document.createElement('div');
        element.classList.add('side-element', side);
        element.style.top = `${Math.random() * 100}vh`; // Random vertical position
        element.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random speed
        element.style.opacity = Math.random() * 0.5 + 0.3; // Random opacity
        sideElementsContainer.appendChild(element);

        // Remove element after animation ends
        setTimeout(() => {
            element.remove();
        }, 15000); // Match animation duration
    }

    // Generate elements continuously
    setInterval(() => {
        createSideElement('left'); // Left side element
        createSideElement('right'); // Right side element
    }, 2000); // Adjust density by changing interval
});
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

    // Create falling elements
    function createFallingElement() {
        const element = document.createElement('div');
        element.classList.add('falling-element');
        element.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        element.style.animationDuration = `${Math.random() * 5 + 10}s`; // Random speed (10-15s)
        element.style.opacity = Math.random() * 0.5 + 0.3; // Random opacity
        element.style.width = `${Math.random() * 10 + 5}px`; // Random size (5-15px)
        element.style.height = element.style.width; // Keep it circular
        fallingElementsContainer.appendChild(element);

        // Remove element after animation ends
        setTimeout(() => {
            element.remove();
        }, 15000); // Match animation duration
    }

    // Generate elements continuously
    setInterval(createFallingElement, 500); // Adjust density by changing interval
});
