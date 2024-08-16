document.addEventListener("DOMContentLoaded", () => {
    const texts = [
        "Hi, I am Yu-Chen Lin",
        "I am a Master's Student in Computer Science and Engineering at The Ohio State University",
        "Specializing in Algorithm Implementation",
        "Optimizing Performance and Full-Stack Development",
        "Explore My Work and Achievements"
    ];

    const colors = [
        "#FFFFFF"
    ];

    const textContainer = document.getElementById("dynamicText");
    let textIndex = 0;
    let colorIndex = 0;
    let wordIndex = 0;
    let currentText = "";
    let isDeleting = false;

    function typeText() {
        if (textIndex < texts.length) {
            if (!isDeleting && wordIndex <= texts[textIndex].length) {
                // Add the next character
                currentText = texts[textIndex].substring(0, wordIndex);
                wordIndex++;
                // textContainer.innerHTML = `<span>${currentText}</span>`;
                textContainer.innerHTML = `<span style="color: ${colors[colorIndex]}">${currentText}</span>`;
            } else if (isDeleting && wordIndex >= 0) {
                // Remove the last character
                currentText = texts[textIndex].substring(0, wordIndex);
                wordIndex--;
                // textContainer.innerHTML = `<span>${currentText}</span>`;
                textContainer.innerHTML = `<span style="color: ${colors[colorIndex]}">${currentText}</span>`;
            }

            // If the word is complete, wait and then start deleting
            if (wordIndex === texts[textIndex].length) {
                isDeleting = true;
                setTimeout(typeText, 2000); // Pause before deleting
            } else if (isDeleting && wordIndex === 0) {
                isDeleting = false;
                textIndex++; // Move to the next word
                setTimeout(typeText, 500); // Pause before typing the next word
            } else {
                setTimeout(typeText, isDeleting ? 50 : 100); // Speed up deletion, slow down typing
            }
        } else {
            textIndex = 0; // Loop back to the first text
            setTimeout(typeText, 500);
        }
    }

    typeText(); // Start the typing effect
});
