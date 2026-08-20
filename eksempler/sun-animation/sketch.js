/** 
 * Fork of the p5.js tutorial "Conditionals and Interactivity" 
 * by Greg Benedis-Grab, Layla Quiñones" 
 * Link: https://editor.p5js.org/gbenedis@gmail.com/sketches/9lz2aqfTO 
 */

//variables for color change
let redVal = 0;
let greenVal = 0;

//variable for sun position
let sun = initializeSun();
let dist;
let userLost = false;
let userWon = false;

/** Return the sun in its initial state */
function initializeSun() {
    let sun = {x: 300, y: 600, d: 140, isFalling: false, v: -4};
    return sun;
}

function setup() {
    createCanvas(600, 400);
    noStroke();
    textAlign(CENTER)
}

function draw() {
  
  //fill background with color based on custom variable values
  background(redVal, greenVal, 0);
  
  //sun
  fill(255, 135, 5, 60);
  circle(sun.x, sun.y, sun.d + 40);
  fill(255, 100, 0, 100);
  circle(sun.x, sun.y, sun.d);
  
  //mountains
  fill(110, 50, 18);
  triangle(200, 400, 520, 253, 800, 400);
  fill(110,95,20);
  triangle(200,400,520,253,350,400);  
  
  fill(150, 75, 0);
  triangle(-100, 400, 150, 200, 400, 400);
  fill(100, 50, 12);
  triangle(-100, 400, 150, 200, 0, 400); 
  
  fill(150, 100, 0);
  triangle(200, 400, 450, 250, 800, 400);
  fill(120, 80, 50);
  triangle(200, 400, 450, 250, 300, 400);
  
  // Change the color of the sun according to its height
  if (sun.y >= 0 && sun.y <= 480) {
    /** Calculate amount of red
     * redVal(y) = a_r * y + b_r
     * redVal(480) = 0
     * redVal(0) = 255
     * a_r = (255 - 0) / (0 - 480)
     * b_r = 255
     */
    redVal = -255/480 * sun.y + 255;

    /** Calculate amount of green
     * a_g = a_r/4
     * greenVal(480) = 0
     * a_g = -255/480/4
     * b_g = 0 - a_g*480 = 255/4 * 480/480
     */
    greenVal = -255/480/4 * sun.y + 255/4;

    // Previous color update
    // redVal += 4;
    // greenVal += 1;
  }

  if (sun.y < -sun.d/2) {
    userLost = true;
    sun.v = 0;
    displayFinalText("black","Game Over")
  } else if (sun.y + sun.d/2 > 600 && sun.isFalling) {
    userWon = true;
    sun.v = 0;
    displayFinalText("white","You won!")
  }

  dist = sqrt((mouseX - sun.x)**2 + (mouseY - sun.y)**2);
  
  if (mouseIsPressed===true) {
    if (userLost) {
        userLost = false;
        sun.isFalling = false;
        sun = initializeSun();
    } else if (userWon) {
        userWon = false;
        sun.isFalling = false;
        sun = initializeSun();
    } else if (dist < sun.d/2) {
        sun.isFalling = true;
    }
  }

  if (sun.isFalling) {
    sun.v += 0.2; // unit: [pixels / frame]
  } 
  sun.y += sun.v; // y [pixels] = v [pixels/frame] * 1 [frame]


}

function displayFinalText(color, str) {
    fill(color)
    textSize(40)
    text(str, width/2, height/2)
    textSize(20)
    text("Click to try again", width/2, height/2 + 40)
}
  
  
  


