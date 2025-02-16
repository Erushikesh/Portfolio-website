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