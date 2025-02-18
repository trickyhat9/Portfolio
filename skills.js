let coinCounter = parseInt(localStorage.getItem('coinCounter')) || 0; // Load from localStorage or default to 0

// Function to update the coin counter and save it to localStorage
function updateCoinCounter() {
    document.getElementById('coinCounter').textContent = `Coins: ${coinCounter}`;
    localStorage.setItem('coinCounter', coinCounter);  // Save to localStorage
}

// Function to create a coin and make it fall
function createCoin() {
    const coin = document.createElement('div');
    coin.classList.add('coin');

    // Add an image for the coin
    const coinImage = document.createElement('img');
    coinImage.src = 'coin.png';  // Replace with your coin image file path
    coinImage.alt = 'coin';
    coinImage.style.width = '30px';  // Adjust size if needed
    coinImage.style.height = '30px'; // Adjust size if needed
    coinImage.style.objectFit = 'cover'; // Ensure it fits within the div

    // Append the image to the coin div
    coin.appendChild(coinImage);

    // Position the coin at a random horizontal position
    coin.style.left = `${Math.random() * window.innerWidth}px`;
    coin.style.top = '-50px'; // Start above the viewport

    // Add the coin to the body
    document.body.appendChild(coin);

    // Apply the falling animation to the coin
    coin.style.animation = `fall ${Math.random() * 5 + 5}s linear forwards`;

    // Handle mouseover event (add 1 to counter)
    coin.addEventListener('mouseover', () => {
        coinCounter++; // Increase the coin count
        updateCoinCounter(); // Update the displayed coin counter
        coin.remove(); // Remove the coin once touched
    });

    // Remove the coin from the DOM after it finishes falling
    coin.addEventListener('animationend', () => {
        coin.remove();
    });
}

// Initial call to display the current coin count when the page loads
updateCoinCounter();

// Generate coins at random intervals
setInterval(createCoin, Math.random() * 2000 + 1000); // Coins every 1-3 seconds



if (document.body.id === "skillspage") {
    const message = "Here are my skills. I am always learning!";
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




let maxClouds = 3; // Max number of clouds allowed on screen at any given time
let activeClouds = []; // Track active clouds

function spawnCloud() {
    // Only spawn a new cloud if there are fewer than maxClouds on the screen
    if (activeClouds.length >= maxClouds) return;  // Only up to 3 clouds at a time

    const cloud = document.createElement("img");
    cloud.src = "cloud.png";  // Replace with your cloud image
    cloud.classList.add("cloud");

    // Generate a random vertical position ensuring clouds don't overlap
    let cloudY;
    let isOverlapping;
    do {
        cloudY = Math.random() * (window.innerHeight - 100); // Avoids bottom edge
        isOverlapping = activeClouds.some(existingCloud => Math.abs(existingCloud.y - cloudY) < 80); // Avoid overlap
    } while (isOverlapping);

    activeClouds.push({ element: cloud, y: cloudY });

    cloud.style.top = `${cloudY}px`;  // Set cloud position
    cloud.style.left = "-125px";  // Start off-screen left

    document.body.appendChild(cloud);

    // Remove the cloud after the animation duration (25s)
    setTimeout(() => {
        cloud.remove(); // Remove the cloud element from the DOM
        activeClouds = activeClouds.filter(existingCloud => existingCloud.element !== cloud); // Clean up
    }, 23000); // Matches animation duration (25 seconds)
}

// Spawn a cloud every 5 seconds
setInterval(spawnCloud, 5000); // Every 5 seconds
