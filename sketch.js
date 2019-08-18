let playerPaddle;
let aiPaddle;

function setup() {
  createCanvas(624, 351);
  playerPaddle = new Paddle(26);
  aiPaddle = new Paddle(width - 48);
  ball = new Ball(); // create the ball object
  playerScore = new Score(width/ 2 - 40);
  aiScore = new Score(width / 2 + 40);
}

function draw() {
  background(0);
  playerPaddle.display();
  aiPaddle.display();

  // these add paddle up down listeners
  playerPaddle.update();
  aiPaddle.update();

  // ai for non-player paddle
  processAI();

  
  // add ball to playing field and watch its position
  ball.update();
  ball.display();

  // watch for collisions
  ball.hasHitPlayer(playerPaddle);
  ball.hasHitAi(aiPaddle);

  stroke(255); // gives a white stroke
  line(width/2, 0, width/2, height);

  playerScore.display();
  aiScore.display();
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    playerPaddle.isUp = true;
  } else if (keyCode == DOWN_ARROW) {
    playerPaddle.isDown = true;
  }
}

function keyReleased() {
  if (keyCode == UP_ARROW) {
    playerPaddle.isUp = false;
  } else if (keyCode === DOWN_ARROW) {
    playerPaddle.isDown = false;
  }
}

function processAI() {
  let middleOfPaddle = aiPaddle.y + aiPaddle.height / 2;
  if (middleOfPaddle > ball.y) {
    aiPaddle.isUp = true;
    aiPaddle.isDown = false;
  } else {
    aiPaddle.isDown = true;
    aiPaddle.isUp = false;
  }
}