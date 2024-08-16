document.addEventListener("DOMContentLoaded", () => {
    const texts = [
        "Hi, I am Yu-Chen Lin.",
        "I am a Master's student in Computer Science and Engineering at The Ohio State University.",
        "I specialize in software engineering, robotic algorithm development, ",
        "system performance optimization, and full-stack development.",
        "Welcome to explore my work and achievements! "
    ];


    const textContainer = document.getElementById("dynamicText");
    let textIndex = 0;
    let wordIndex = 1;
    let currentText = "";
    let isCompleted = false;

    function typeText() {
        if (textIndex < texts.length) {
            if (!isCompleted && wordIndex < texts[textIndex].length) {
                // Add the next character
                currentText = texts[textIndex].substring(wordIndex - 1, wordIndex);
                wordIndex++;
                textContainer.innerHTML += `<span style="color: #FFFFFF">${currentText}</span>`;
            }
            if (isCompleted) {
                textIndex++; // Move to the next word
                textContainer.innerHTML += `<br>`;
                wordIndex = 0;
                isCompleted = false;
            }

            if (wordIndex === texts[textIndex].length) {
                isCompleted = true;
            }
            setTimeout(typeText, 50); // Pause before typing the next word
        }
    }

    typeText(); // Start the typing effect
});
