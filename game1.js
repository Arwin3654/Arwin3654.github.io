const canvas = document.getElementById('gameCanvas');
const button = document.getElementById('start');
const ctx = canvas.getContext('2d');

button.addEventListener('click', function() {
    updateBallPosition();
    button.disabled = true;
});
// Set canvas dimensions
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 20;

// Ball properties
let ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 20,
  dx: 5, // Speed in the x direction
  dy: 5, // Speed in the y direction
  color: 'orange'
};

// Function to draw the ball
function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();
}

// Function to update the ball's position
function updateBallPosition() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the ball
  drawBall();

  // Move the ball
  ball.x += ball.dx;
 

  // Detect collision with walls and bounce
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.dx *= -1; // Reverse x direction
  }
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.dy *= -1; // Reverse y direction
  }

  // Request animation frame to keep the ball moving
  requestAnimationFrame(updateBallPosition);
}

// Start the game

