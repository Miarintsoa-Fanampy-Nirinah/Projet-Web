let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const changingTextElement = document.getElementById("changing-text");
    const words = changingTextElement.getAttribute("data-words").split(", ");  // Récupérer les mots depuis l'attribut 'data-words'
    const fullText = words[wordIndex];
    const displayText = isDeleting 
        ? fullText.substring(0, charIndex--) 
        : fullText.substring(0, charIndex++);

    changingTextElement.textContent = displayText;

    const typingSpeed = isDeleting ? 100 : 150; // Ajuster la vitesse pour taper et supprimer

    if (!isDeleting && charIndex === fullText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Attendre avant de supprimer
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Passer au mot suivant
        setTimeout(typeEffect, 500); // Attendre avant de taper le mot suivant
    } else {
        setTimeout(typeEffect, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
