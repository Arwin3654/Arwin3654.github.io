const canvas = document.getElementById('gamebox');
const ctx = canvas.getContext('2d');

// Player Box information
let X_box = (canvas.width - 100) / 2; // Center the box at the start
const boxWidth = 100;
const boxHeight = 20;
const boxSpeed = 4;

let moveLeft = false; // Flag to track left movement
let moveRight = false; // Flag to track right movement

function drawLine() {
    const gridSpacing = 10;

    ctx.strokeStyle = '#add';
    ctx.lineWidth = 1;

    // Draw vertical lines (y-axis lines)
    for (let x = 0; x <= canvas.width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }

    // Draw horizontal lines (x-axis lines)
    for (let y = 0; y <= canvas.height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

function drawTopBoxes() {
    const numberOfBoxes = 5; // Number of boxes to draw
    const boxSpacing = 10; // Spacing between boxes
    const y = 10;
    const leftMargin = 38;

    for (let i = 0; i < numberOfBoxes; i++) {
        const x = leftMargin + i * (boxWidth + boxSpacing); // Calculate x-position for each box
        ctx.fillStyle = 'blue'; // Color of the top boxes
        ctx.fillRect(x, y, boxWidth-10, boxHeight); // Draw the box
    }
}

function drawBox(x) {
    const y = canvas.height - boxHeight - 10; // Position the box near the bottom
    ctx.fillStyle = 'grey'; // Set the color of the box
    ctx.fillRect(x, y, boxWidth, boxHeight); // Draw the box at position (x, y)
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas
}

function animateBox() {
    clearCanvas(); // Clear the canvas before each frame
    drawLine(); // Redraw the grid lines
    drawTopBoxes();

    // Update the box's position based on movement flags
    if (moveRight) {
        X_box += boxSpeed;
    }
    if (moveLeft) {
        X_box -= boxSpeed;
    }

    // Ensure the box stays within the canvas boundaries
    if (X_box < 0) {
        X_box = 0; // Prevent moving off the left edge
    } else if (X_box > canvas.width - boxWidth) {
        X_box = canvas.width - boxWidth; // Prevent moving off the right edge
    }

    drawBox(X_box); // Draw the box at its current x-position
    requestAnimationFrame(animateBox); // Continue the animation
}

// Keyboard event listener to move the box
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        moveRight = true; // Start moving right
    } else if (event.key === 'ArrowLeft') {
        moveLeft = true; // Start moving left
    }
});

// Keyboard event listener to stop moving the box
document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowRight') {
        moveRight = false; // Stop moving right
    } else if (event.key === 'ArrowLeft') {
        moveLeft = false; // Stop moving left
    }
});

// Start the animation
animateBox();
