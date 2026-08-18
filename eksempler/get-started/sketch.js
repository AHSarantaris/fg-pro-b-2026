'use strict'

let points = 0; // number of points the user has
let canvasWidth = 600; 
let canvasHeight = 400;
let rate = 60; // Frame rate
let frame = 0; // Frame count modulo frame rate
let flower = {x: canvasWidth/2, y: canvasHeight/2, d: 30}; // x: x-position, y: y-position, d:diameter
let insectDiameter = 40;
let dist;

function setup() {
    //creates a canvas 600 pixels wide
    //and 400 pixels high
    createCanvas(canvasWidth, canvasHeight); 
}

function draw() {
    // Set frame rate
    frameRate(rate)
    // Update frame count
    frame++; // Equivalent to frame = frame + 1;

    //sky blue background
    background(135, 206, 235);

    //sun in top-right corner
    fill("yellow");
    circle(550, 50, 100);
    
    //grass on bottom half
    fill("green");
    rect(0, 200, 600, 200);
    
    // Update flower position every second
    if (frame === rate) {
        updateFlowerPosition();
    }

    // Draw flower and insect as circles
    fill("purple")
    circle(flower.x, flower.y, flower.d)
    fill("black")
    circle(mouseX,mouseY,insectDiameter)

    // Calculate distance and between flower and insect
    dist = sqrt((flower.x - mouseX)**2 + (flower.y - mouseY)**2);

    /** For debugging */
    // console.log(dist)
    // console.log(flower.x)

    // Check if we have catched the flower (distance is smaller than the radius of the flower)
    if (dist < flower.d/2) {
        points++;
        updateFlowerPosition();
    }

    //  Display the number of points the user has
    fill("black");
    textSize(20)
    text("Point: " + points, 10, 22)
}

// Helper function
function updateFlowerPosition() {
    flower.x = random(0, canvasWidth);
    flower.y = random(0, canvasHeight);
    frame = 0;
}
