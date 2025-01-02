const words = [" Ava ", " Ethan ", " Lucas ", " Mason ", " Sophia ", " Oliver "]; //Adding space at the beginning and end of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const fullText = words[wordIndex];
    const displayText = isDeleting 
        ? fullText.substring(0, charIndex--) 
        : fullText.substring(0, charIndex++);

    document.getElementById("changing-text").textContent = displayText;

    const typingSpeed = isDeleting ? 100 : 150; // Adjust speed for typing and deleting

    if (!isDeleting && charIndex === fullText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
        setTimeout(typeEffect, 500); // Wait before typing the next word
    } else {
        setTimeout(typeEffect, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
