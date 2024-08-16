document.addEventListener("DOMContentLoaded", () => {
    const texts = [
        "Hi, I am Yu-Chen Lin ",
        "I am a Master's student in Computer Science and Engineering at The Ohio State University ",
        "I specialize in software engineering, robotic algorithm development, system performance optimization, and full-stack development ",
        "Welcome to explore my work and achievements "
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
    let isCompleted = false;

    function typeText() {
        if (textIndex < texts.length) {
            if (!isCompleted && wordIndex < texts[textIndex].length) {
                // Add the next character
                currentText = texts[textIndex].substring(0, wordIndex);
                wordIndex++;
                // textContainer.innerHTML = `<span>${currentText}</span>`;
                textContainer.innerHTML = `<span style="color: ${colors[colorIndex]}">${currentText}</span>`;
            } else if (isCompleted) {
                textIndex++; // Move to the next word
                wordIndex = 0;
            }
            // else if (isDeleting && wordIndex >= 0) {
            //     // Remove the last character
            //     currentText = texts[textIndex].substring(0, wordIndex);
            //     wordIndex--;
            //     // textContainer.innerHTML = `<span>${currentText}</span>`;
            //     textContainer.innerHTML = `<span style="color: ${colors[colorIndex]}">${currentText}</span>`;
            // }

            if (wordIndex === texts[textIndex].length) {
                isCompleted = true;
            }
            // // If the word is complete, wait and then start deleting
            // if (wordIndex >= texts[textIndex].length) {
            //     isDeleting = true;
            //     setTimeout(typeText, 2000); // Pause before deleting
            // } else if (isDeleting && wordIndex === 0) {
            //     isDeleting = false;
            //     textIndex++; // Move to the next word
            //     setTimeout(typeText, 500); // Pause before typing the next word
            // } else {
            //     setTimeout(typeText, isDeleting ? 50 : 100); // Speed up deletion, slow down typing
            // }
        }
        // else {
        //     textIndex = 0; // Loop back to the first text
        //     setTimeout(typeText, 500);
        // }
    }

    typeText(); // Start the typing effect
});
