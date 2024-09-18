document.addEventListener("DOMContentLoaded", () => {
    const texts = [
        "Hi, I'm Yu-Chen Lin, a Master's student in Computer Science and Engineering at The Ohio State University.",
        "I specialize in software engineering and focus on web development, system optimization, and robotic algorithms.",
        "My passion is to create efficient, innovative solutions to complex problems.",
        "Explore my work and let's connect!"
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
