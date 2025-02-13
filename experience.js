function revealExperience(num) {
    const block = document.querySelector(`.col-12:nth-child(${num}) .mystery-block`);
    const content = document.getElementById(`experience${num}`);

    block.classList.add("fade-out"); // Hide block

    setTimeout(() => {
        content.classList.add("show-content"); // Expand experience smoothly
    }, 500); // Matches fade-out animation
}

if (document.body.id === "experiencepage") {
    const message = "Click a block to reveal experience!";
    let index = 0;
    const speed = 50; // Typing speed (lower = faster)

    function typeText() {
        const textElement = document.getElementById("speech-text");

        if (index < message.length) {
            textElement.innerHTML = message.substring(0, index + 1) + '<span class="cursor">|</span>';
            index++;
            setTimeout(typeText, speed);
        } else {
            textElement.innerHTML = message; // Remove cursor after finishing
        }
    }

    // Start typing effect when the page loads
    window.onload = () => {
        setTimeout(typeText, 1000); // Delay start for better effect
    };
}