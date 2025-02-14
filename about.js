const sentences = [
    "My name is Hunter and I am an information security and networking enthusiast.",
    "I also have experience in web design.",
    "I have multiple IT certifications (A+, N+, Sec+).",
    "My strongest languages are Javascript, Python, HTML, CSS and SQL.",
    "Feel free to contact me by viewing the 'Contact' page!",
    "Have a great day!"
];

let currentSentence = 0;
let index = 0;
const speed = 50; // Typing speed (lower = faster)
let isTyping = false;

function typeSentence() {
    if (currentSentence >= sentences.length) return; // Stop when all sentences are displayed

    const textElement = document.getElementById("speech-text-about");
    const pressEnterElement = document.getElementById("press-enter");
    textElement.innerHTML = ""; // Clear previous text
    pressEnterElement.style.opacity = "0"; // Hide "Press Enter" message during typing
    pressEnterElement.style.visibility = "hidden";

    index = 0;
    isTyping = true;

    function typeCharacter() {
        if (index < sentences[currentSentence].length) {
            textElement.innerHTML = sentences[currentSentence].substring(0, index + 1) + '<span class="cursor"></span>';
            index++;
            setTimeout(typeCharacter, speed);
        } else {
            textElement.innerHTML = sentences[currentSentence]; // Remove cursor after finishing
            isTyping = false; // Allow Enter key to proceed
            pressEnterElement.style.opacity = "1"; // Show "Press Enter" prompt
            pressEnterElement.style.visibility = "visible";
        }
    }

    typeCharacter();
}

// Detect Enter Key Press
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !isTyping) {
        const pressEnterElement = document.getElementById("press-enter");
        pressEnterElement.style.opacity = "0"; // Hide "Press Enter" when proceeding
        pressEnterElement.style.visibility = "hidden";

        currentSentence++;
        if (currentSentence < sentences.length) {
            typeSentence(); // Start next sentence
        }
    }
});

// Start typing first sentence on page load
window.onload = () => {
    setTimeout(typeSentence, 1000); // Delay for effect
};
