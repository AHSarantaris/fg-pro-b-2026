// -----------------------------
// Tank vs Planes
// -----------------------------
//
// Controls:
//   A / D or Left / Right arrows : Move the tank left and right
//   Mouse                        : Aim the cannon
//   Click / Tap                  : Shoot a projectile at the airplanes
//
// Airplanes spawn at the top and drop bombs. Shoot them down before
// their bombs hit you!

// Game state and score
let gameOver = false; 
let score = 0;

// Constants
const gravity = 0.25;   // Gravitational acceleration [frames / s^2]
const groundY = 500;

// The tank
let tank = {
    x: 400,      // horizontal position
    y: groundY,      // vertical position
    w: 60,    // width of the tank body
    h: 30,      // height of the tank body
    speed: 5,    // pixels per frame
    gun: {
        l: 30,  // length of the gun
        w: 10,  // gun width
        angle: 0    // gun
    },
};

// All active shells (tank projectiles)
let shells = [];

// All active airplanes
let airplanes = [];

// All active bombs (dropped by airplanes)
let bombs = [];

// All active explosions
let explosions = [];


function setup() {
    // Create an 800p x 600p canvas 
    createCanvas(800, 600);

    // Draw shapes from their center point (makes positioning easier)
    rectMode(CENTER);
    ellipseMode(CENTER);
}


function draw() {
  // Game over screen
  if (gameOver) {
    drawGameOver();
    return;
  }

  background(135, 206, 235); // sky blue

  drawGround();

  updateTank();

  spawnAirplanes();
  updateAirplanes();
  
  updateShells();
  updateBombs();
  updateExplosions();
  
  drawScore();
}

function drawGround() {
  fill(200,200,120); 
  noStroke();
  rectMode(CORNER)
  rect(0, groundY, width, height-groundY);
  rectMode(CENTER)
}

function spawnAirplanes() {
  // Every ~2 seconds (120 frames at 60 fps) a new airplane appears
  if (frameCount === 10 || frameCount % 120 === 0) {
    let dir = random(1) < 0.5 ? -1 : 1; // move left or right
    let startX = dir === 1 ? -50 : width + 50; // start off-screen
    airplanes.push({
      x: startX,
      y: random(100, 200),
      vx: dir * random(3,4),
      w: 90,
      h: 30,
      bombsLeft: 5,
      isBombing: false,
    });
  }
}

function updateTank() {
  if (keyIsDown(LEFT_ARROW) || keyIsDown("a")) {
    tank.x -= tank.speed;
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown("d")) {
    tank.x += tank.speed;
  }
  // Constrain the x-value of the tank to within the viewable area
  tank.x = constrain(tank.x, tank.w / 2, width - tank.w / 2); 
  // Update angle of the gun
  tank.gun.angle = atan2(mouseY - tank.y, mouseX - tank.x);
  drawTank();
}


function drawTank() {
    // tank body
    fill(60,100,50);
    rect(tank.x, tank.y, tank.w, tank.h);
    // Tank gun
    fill(60);
    strokeWeight(tank.gun.w);
    stroke(0)
    line(
        tank.x, 
        tank.y, 
        tank.x + tank.gun.l*cos(tank.gun.angle),
        tank.y + tank.gun.l*sin(tank.gun.angle)
        )
    noStroke();
}

function updateShells() {
  for (let i = shells.length - 1; i >= 0; i--) {
    let s = shells[i];

    // Move horizontally (constant speed)
    s.x += s.vx;

    // Move vertically, then apply gravity (makes the arc)
    s.y += s.vy;
    s.vy += gravity;

    // Draw the shell
    fill(0);
    noStroke();
    circle(s.x, s.y, s.d);

    // Check if this shell hit any airplane
    let hitAirplane = false;
    for (let j = airplanes.length - 1; j >= 0; j--) {
      let a = airplanes[j];
      if (abs(s.x - a.x) < a.w / 2 + 4 && abs(s.y - a.y) < a.h / 2 + 4) {
        airplanes.splice(j, 1); // remove the airplane
        shells.splice(i, 1);    // remove the shell
        score += 1;            // add points
        createExplosion(a.x, a.y);
        hitAirplane = true;
        break;
      }
    }
    if (hitAirplane) {
      continue; // skip the rest of the shell loop for this shell
    }

    // Check if shell hit the tank itself
    if (abs(s.x - tank.x) < tank.w / 2 && abs(s.y - tank.y) < tank.h / 2) {
      createExplosion(s.x, s.y);
      shells.splice(i, 1);
      gameOver = true;
      continue;
    }

    // Remove if it hit the ground
    if (s.y > groundY) {
      createExplosion(s.x, groundY);
      shells.splice(i, 1);
      continue;
    }

    // Remove if it left the screen
    if (s.x < 0 || s.x > width) {
      shells.splice(i, 1);
    }
  }
}

function updateAirplanes() {
  for (let i = airplanes.length - 1; i >= 0; i--) {
    let a = airplanes[i];

    // Move horizontally
    a.x += a.vx;

    // Drop bombs while the airplane is over the tank
    if (abs(a.x - tank.x) < tank.w / 2 && a.bombsLeft > 0) {
        a.isBombing = true;
    }
    
    // Fixed load of 5 bombs, dropped one at a time
    if (a.isBombing && a.bombsLeft > 0 && frameCount % 4 === 0) {
        bombs.push({
            x: a.x,
            y: a.y + a.h / 2,
            w: 10,
            h: 30,
            vx: 0,
            vy: 0,
        });
        a.bombsLeft--;
    }

    // Remove if it flew off-screen
    if (a.x < -100 || a.x > width + 100) {
      airplanes.splice(i, 1);
    } else {
        // Draw airplane
        fill(150,50,50);
        noStroke();
        rect(a.x, a.y, a.w, a.h);
    }
  }
}

function updateBombs() {
  for (let i = bombs.length - 1; i >= 0; i--) {
    let b = bombs[i];

    // Move horizontally (constant speed)
    b.x += b.vx;

    // Move vertically, then apply gravity (makes the arc)
    b.y += b.vy;
    b.vy += gravity;

    // Draw the bomb
    fill(100);
    noStroke();
    ellipse(b.x, b.y, 10, 30);

    // Check if the bomb hit the tank body (rectangle defined by tank.w and tank.h)
    if (abs(b.x - tank.x) < tank.w / 2 && abs(b.y - tank.y) < tank.h / 2) {
        createExplosion(b.x, b.y);
        gameOver = true;
    }

    // Remove if it hit the ground
    if (b.y > groundY) {
      createExplosion(b.x, groundY);
      bombs.splice(i, 1);
      continue;
    }

    // Remove if it left the screen
    if (b.x < 0 || b.x > width) {
      bombs.splice(i, 1);
    }
  }
}

function drawScore() {
  fill(0);
  noStroke();
  textSize(20);
  textAlign(LEFT, TOP);
  text("Planes shot: " + score, 10, 10);
}

// Reusable explosion factory
function createExplosion(x, y) {
  explosions.push({
    x: x,
    y: y,
    age: 0,
    maxAge: 30,
  });
}

function updateExplosions() {
  for (let i = explosions.length - 1; i >= 0; i--) {
    let e = explosions[i];
    e.age++;

    // Expanding orange ring
    let size = e.age * 5;
    let alpha = 255 - (e.age / e.maxAge) * 255;
    fill(255, 165, 0, alpha);
    noStroke();
    circle(e.x, e.y, size);

    // Bright yellow core
    fill(255, 255, 0, alpha / 2);
    circle(e.x, e.y, size / 2);

    // Remove when expired
    if (e.age >= e.maxAge) {
      explosions.splice(i, 1);
    }
  }
}

function drawGameOver() {
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("GAME OVER", width / 2, height / 2 - 20);
  textSize(20);
  text("Score: " + score, width / 2, height / 2 + 20);
  text("Click to restart", width / 2, height / 2 + 60);
}


function mousePressed() {
    // If game is over, clicking restarts it
    if (gameOver) {
        gameOver = false;
        score = 0;
        shells = [];
        airplanes = [];
        bombs = [];
        explosions = [];
        tank.x = 400;
        return;
    }

    // Direction from tank to where the user clicked
    let dx = mouseX - tank.x;
    let dy = mouseY - tank.y;
    let distance = sqrt(dx**2 + dy**2);

    // Don't shoot if clicked exactly on the tank (avoid divide by zero)
    if (distance === 0) {
        return;
    }

    // Power is proportional to the click distance:
    //   short click  -> weak shot (slow shell, short arc)
    //   long click   -> strong shot (fast shell, long arc)
    // map(...) scales the distance to a speed, constrain(...) keeps it sane
    let power = map(distance, 0, 400, 5, 15);
    power = constrain(power, 5, 15);

    // Turn the direction into a velocity vector
    // vy is negative because up on the canvas is a smaller y value
    let vx = (dx / distance) * power;
    let vy = (dy / distance) * power;

    // Spawn the shell just outside the tank body, at the cannon tip
    // Use max(tank.w, tank.h) / 2 + 5 so it's outside the rectangle in any direction
    let spawnDist = max(tank.w, tank.h) / 2 + 5;
    shells.push({
        x: tank.x + spawnDist * cos(tank.gun.angle),
        y: tank.y + spawnDist * sin(tank.gun.angle),
        vx: vx,
        vy: vy,
        d: 8,
    });
}
