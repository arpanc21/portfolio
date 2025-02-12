const typewriterTexts = [
    "A Passionate Software Engineer",
    "Striving to make an impact",
    "Driven by curiosity",
    "Dedicated to improving every day",
    "Solving Problems Through Software",
];
const typewriterElement = document.querySelector(".typewriter");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = typewriterTexts[textIndex];

    if (isDeleting) {
        typewriterElement.textContent = currentText.slice(0, charIndex);
        charIndex--;
    } else {
        typewriterElement.textContent = currentText.slice(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 2000; 
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typewriterTexts.length; 
    }

    setTimeout(typeWriter, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeWriter);
