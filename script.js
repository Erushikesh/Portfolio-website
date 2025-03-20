body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    color: white;
    text-align: center;
    line-height: 1.7;
    overflow-x: hidden;
    position: relative;
}

.background-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #1e7255, #6c2a98, #1e9a2a, #651e72);
    background-size: 400% 400%;
    animation: gradientBG 12s ease infinite;
    z-index: -1;
    filter: brightness(1.1) contrast(1.2); }

@keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    background: radial-gradient(circle, transparent 20%, #000 20%, #000 80%, transparent 80%, transparent),
                radial-gradient(circle, transparent 20%, #000 20%, #000 80%, transparent 80%, transparent);
    background-size: 50px 50px;
    animation: moveParticles 4s linear infinite;
}

@keyframes moveParticles {
    0% { background-position: 0 0, 25px 25px; }
    100% { background-position: 50px 50px, 75px 75px; }
}
header {
    position: fixed;
    top: 10px; 
    left: 50%;
    transform: translateX(-50%);
    width: 90%; 
    max-width: 1200px; 
    padding: 20px 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    backdrop-filter: blur(10px);
    border-radius: 15px;
    overflow: hidden;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
}

nav h1 {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 1px;
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
}

nav ul li {
    margin: 0 20px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 400;
    transition: opacity 0.3s ease;
}

nav ul li a:hover {
    opacity: 0.7;
}

#hero {
    position: relative;
    z-index: 10; 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
}

.hero-content h2 {
    font-size: 4rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 0;
}

.hero-content p {
    font-size: 1.5rem;
    font-weight: 300;
    opacity: 0.8;
    letter-spacing: 1px;
}

.hero-cta {
    margin-top: 30px;
}

.cta-button {
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid white;
    color: white;
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    border-radius: 50px;
}

.cta-button:hover {
    background: white;
    color: #1e3c72;
    transform: scale(1.1);
}

section {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

h2 {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 20px;
    letter-spacing: 1px;
}

p {
    font-size: 1.5rem;
    font-weight: 300;
}

.project {
    margin-bottom: 40px;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 500px;
    margin: 0 auto;
}

.form-input {
    width: 100%;
    padding: 10px;
    border: 2px solid white;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
}

.form-input:focus {
    border-color: lightblue;
}

footer {
    background: rgba(0, 0, 0, 0.6);
    padding: 20px;
    position: relative;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.5px;
}

@media (max-width: 768px) {
    header {
        width: 95%;
        top: 5px;
        padding: 15px 0;
    }

    nav {
        padding: 0 20px;
        flex-direction: column;
    }

    nav h1 {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    nav ul li {
        margin: 0 10px;
    }

    nav ul li a {
        font-size: 1rem;
    }

    .hero-content h2 {
        font-size: 2.5rem;
    }

    .hero-content p {
        font-size: 1.2rem;
        padding: 0 20px;
    }

    h2 {
        font-size: 2rem;
    }

    p {
        font-size: 1.1rem;
    }

    .project {
        padding: 0 20px;
    }

    .contact-form {
        width: 90%;
    }
}

@media (max-width: 480px) {
    nav ul li {
        margin: 0 8px;
    }

    nav ul li a {
        font-size: 0.9rem;
    }

    .hero-content h2 {
        font-size: 2rem;
    }

    .hero-content p {
        font-size: 1rem;
    }

    .cta-button {
        font-size: 1rem;
        padding: 8px 16px;
    }

    h2 {
        font-size: 1.8rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.5;
    }

    footer {
        font-size: 0.9rem;
        padding: 15px;
    }
}

.video-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 2rem auto;
    max-width: 1200px;
    padding: 0 20px;
}

header {
    max-width: 800px;     padding: 15px 0 !important;     top: 15px; }

nav {
    padding: 0 30px !important; }

nav h1 {
    font-size: 1.8rem !important;     margin-bottom: 0;
}

nav ul li {
    margin: 0 15px !important; }

nav ul li a {
    font-size: 1.1rem !important; }

#hero {
    padding-top: 100px;     height: calc(100vh - 100px); }

@media (max-width: 768px) {
    header {
        max-width: 90%;
        padding: 10px 0 !important;
        top: 10px !important;
    }

    nav {
        padding: 0 20px !important;
    }

    nav h1 {
        font-size: 1.4rem !important;
    }

    nav ul li {
        margin: 0 10px !important;
    }

    nav ul li a {
        font-size: 0.95rem !important;
    }

    #hero {
        padding-top: 80px;
        height: calc(100vh - 80px);
    }
}

@media (max-width: 480px) {
    header {
        max-width: 95%;
        top: 5px !important;
        padding: 8px 0 !important;
    }

    nav h1 {
        font-size: 1.2rem !important;
    }

    nav ul li {
        margin: 0 8px !important;
    }

    nav ul li a {
        font-size: 0.85rem !important;
        padding: 5px;
    }

    #hero {
        padding-top: 70px;
        height: calc(100vh - 70px);
    }
}
input, textarea, select, button {
    font-size: 16px; }

html {
    -webkit-text-size-adjust: 100%;     -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
}

body {
    touch-action: manipulation;     -webkit-tap-highlight-color: transparent;
}
html, body {
    max-width: 100%;
    overflow-x: hidden;
}

* {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}
.side-elements {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;     z-index: 0; }

.side-element {
    position: absolute;
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    animation: floatIn 10s infinite ease-in-out;
    opacity: 0.7;
}

.side-element.left {
    left: -100px;
    animation-delay: 0s;
}

.side-element.right {
    right: -100px;
    animation-delay: 5s; }

@keyframes floatIn {
    0% {
        transform: translateX(0) scale(0.8);
        opacity: 0;
    }
    50% {
        transform: translateX(20vw) scale(1);
        opacity: 0.7;
    }
    100% {
        transform: translateX(0) scale(0.8);
        opacity: 0;
    }
}
.side-element.triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid rgba(255, 255, 255, 0.1);
    border-radius: 0;
}
.side-element {
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
}
.falling-elements {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;     z-index: 0;     overflow: hidden;
}

.falling-element {
    position: absolute;
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    animation: fall 10s linear infinite;
    opacity: 0.7;
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
}

@keyframes fall {
    0% {
        transform: translateY(-10%) rotate(0deg);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(110vh) rotate(360deg);
        opacity: 0;
    }
}
.underline-hover * {
    display: inline-block;
    position: relative;
    cursor: pointer;
}

.underline-hover *::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: currentColor;
    bottom: -3px;
    left: 0;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
}

.underline-hover *:hover::after {
    transform: scaleX(1);
}
.glow-circles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
}

.glow-circle {
    position: absolute;
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent 70%);
    border-radius: 50%;
    animation: floatGlow 15s infinite ease-in-out;
}

@keyframes floatGlow {
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(20vw, 20vh);
    }
    100% {
        transform: translate(0, 0);
    }
}
.mouse-trailer {
    position: fixed;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease-out, opacity 0.3s ease;
    z-index: 1000;
    mix-blend-mode: difference;
}
.cta-button {
    position: relative;
    overflow: hidden;
}

.cta-button::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent);
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.5s ease;
    pointer-events: none;
}

.cta-button:hover::after {
    transform: translate(-50%, -50%) scale(1);
}
.parallax-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
}

.parallax-layer-1 {
    background: url('layer1.png') center/cover;
    transform: translateZ(-2px) scale(3);
}

.parallax-layer-2 {
    background: url('layer2.png') center/cover;
    transform: translateZ(-1px) scale(2);
}
.glitch {
    position: relative;
    animation: glitch 2s infinite;
}

@keyframes glitch {
    0% {
        transform: translate(0);
    }
    20% {
        transform: translate(-2px, 2px);
    }
    40% {
        transform: translate(2px, -2px);
    }
    60% {
        transform: translate(-2px, 2px);
    }
    80% {
        transform: translate(2px, -2px);
    }
    100% {
        transform: translate(0);
    }
}
.particle-explosion {
    position: relative;
    overflow: hidden;
}

.particle-explosion::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    animation: explode 1s ease-out;
    opacity: 0;
}

@keyframes explode {
    0% {
        transform: scale(0);
        opacity: 1;
    }
    100% {
        transform: scale(10);
        opacity: 0;
    }
}
.grid-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 20px 20px;
    z-index: -1;
    animation: moveGrid 10s linear infinite;
}

@keyframes moveGrid {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 20px 20px;
    }
}
.gradient-border {
    position: relative;
    background: transparent;
    border: 2px solid transparent;
    border-radius: 10px;
    overflow: hidden;
}

.gradient-border::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    background: linear-gradient(45deg, #6dd5ed, #ff7e5f);
    z-index: -1;
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.gradient-border:hover::before {
    opacity: 1;
}
.liquid-fill {
    position: relative;
    overflow: hidden;
}

.liquid-fill::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: liquidFlow 3s linear infinite;
}

@keyframes liquidFlow {
    0% {
        left: -100%;
    }
    100% {
        left: 100%;
    }
}
.gradient-text {
    background: linear-gradient(45deg, #6dd5ed, #ff7e5f);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: gradientShift 5s ease infinite;
}

@keyframes gradientShift {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
.line-drawing {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: drawLine 5s ease-in-out infinite;
}

@keyframes drawLine {
    to {
        stroke-dashoffset: 0;
    }
}

.video-container {
    position: relative;
    width: 90%; 
    max-width: 1200px; 
    margin: 0 auto; 
    border-radius: 20px; 
    overflow: hidden; 
    padding: 4px; 
    background: linear-gradient(45deg, #b36ded, #b36ded); 
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); 
    transition: transform 0.3s ease, box-shadow 0.3s ease; 
}


.video-container video {
    display: block;
    width: 100%; 
    height: auto; 
    border-radius: 16px; 
}


.video-container:hover {
    transform: scale(1.02); 
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4); 
}


@media (max-width: 768px) {
    .video-container {
        width: 95%; 
        border-radius: 15px; 
    }

    .video-container video {
        border-radius: 12px; 
    }
}

.loading-spinner {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border: 5px solid rgba(255, 255, 255, 0.3);
    border-top: 5px solid #6dd5ed; 
    border-radius: 50%;
    animation: spin 1s linear infinite;
    z-index: 1000; 
}

@keyframes spin {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}


.loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    z-index: 9999;
    visibility: visible;
    opacity: 1;
    transition: opacity 0.5s ease, visibility 0.5s ease;
}

.loader-container.hidden {
    visibility: hidden;
    opacity: 0;
}

.loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.blind {
    flex: 1;
    background-color: #333;
    transform: scaleY(1);
    transform-origin: bottom;
    transition: transform 0.5s ease;
}


.blind:nth-child(1) { transition-delay: 0.1s; }
.blind:nth-child(2) { transition-delay: 0.2s; }
.blind:nth-child(3) { transition-delay: 0.3s; }
.blind:nth-child(4) { transition-delay: 0.4s; }
.blind:nth-child(5) { transition-delay: 0.5s; }
.blind:nth-child(6) { transition-delay: 0.6s; }
.blind:nth-child(7) { transition-delay: 0.7s; }
.blind:nth-child(8) { transition-delay: 0.8s; }

.loader-container.active .blind {
    transform: scaleY(0);
}

.welcome-blind {
    position: relative;
    background-color: #2c3e50; 
}

.welcome-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-family: Arial, sans-serif;
    font-size: 3rem;
    opacity: 0;
    transition: opacity 0.5s ease;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.loader-container.active .welcome-blind .welcome-text {
    opacity: 1;
    transition-delay: 3s; 
}
.blind:nth-child(odd) { background-color: linear-gradient(to bottom, #b734db, #6d1fa8); }
.blind:nth-child(even) { background-color: linear-gradient(to bottom, #3ce77b, #1fa85e); }
.loader {
    flex-direction: row;
    overflow: hidden;
}
.blind {
    transform: scaleX(1);
    transform-origin: right;
}
.loader-container.active .blind {
    transform: scaleX(0);
}
.loader-container {
    background: url('your-image.png') center/cover;
}
.blind {
    background-color: rgba(0,0,0,0.8);
}
document.addEventListener('mousemove', (e) => {
    const loader = document.querySelector('.loader');
    const x = e.clientX / window.innerWidth * 100;
    const y = e.clientY / window.innerHeight * 100;
    loader.style.transform = `translate(${x - 50}%, ${y - 50}%)`;
});
.blind {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
}
.particle {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    animation: float 3s infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

.vignette {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, 
        transparent 0%, 
        rgba(0,0,0,0.5) 70%, 
        rgba(0,0,0,0.8) 100%
    );
    pointer-events: none;
    z-index: 10000;
    mix-blend-mode: multiply;
}


.lens-flare {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10001;
    opacity: 0;
    transition: opacity 0.5s ease;
}

.loader-container.active .lens-flare {
    opacity: 0.8;
    animation: flareMove 2s ease-in-out;
}

.flare-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: radial-gradient(circle, 
        rgba(255,255,255,0.8) 0%, 
        rgba(255,255,255,0.4) 50%, 
        transparent 100%
    );
    position: absolute;
    animation: flarePulse 2s infinite;
}

.flare-circle.small {
    width: 20px;
    height: 20px;
    animation-delay: 0.5s;
}

.flare-line {
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255,255,255,0.6), 
        transparent
    );
    transform: rotate(45deg);
    position: absolute;
    top: 25px;
    left: -25px;
}

.flare-line.vertical {
    transform: rotate(135deg);
    animation-delay: 0.3s;
}

@keyframes flareMove {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.2); }
    100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
}

@keyframes flarePulse {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.2); opacity: 1; }
}


.loader-container {
    background-color: #000000;
}


.welcome-text {
    font-size: 4rem;
    color: #ffffff;
    text-shadow: 0 0 20px rgba(255,255,255,0.8);
    z-index: 10002;
}

.flare-circle {
    background: radial-gradient(circle, 
        rgba(255,0,0,0.8) 0%, 
        rgba(0,255,0,0.4) 50%, 
        rgba(0,0,255,0.2) 100%
    );
}
.stars {
    position: fixed;
    width: 100%;
    height: 100%;
    background: transparent;
    animation: twinkle 5s infinite;
}

@keyframes twinkle {
    0% { box-shadow: randomStarPositions(); }
    50% { box-shadow: randomStarPositions(); }
    100% { box-shadow: randomStarPositions(); }
}
