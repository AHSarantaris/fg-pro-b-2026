let flowers = []; //array of flowers

function setup() {
  createCanvas(400, 400);
  flowerPower(); //generate 20 flowers
}

function draw() {
  background("lightblue");
  updateAndDrawFlowers();
}

function mousePressed() {
  // Plant a new flower where the mouse is clicked
  let flower1 = createFlower();
  flower1.x = mouseX; //update x to be mouseX
  flower1.y = mouseY; //update y to be mouseY
  flowers.push(flower1);
}

function updateAndDrawFlowers() {
  for (let i = 0; i <= flowers.length - 1; i++) {
    let flower = flowers[i];
    drawFlower(flower);
    flower.lifespan -= 1; // Reduce lifespan

    if (flower. lifespan <= 0) {
      flowers.splice(i, 1); // Remove wilted flower
    }
  }
}

//function to create 20 flowers
function flowerPower(){
  for(let i = 0; i < 20; i++){
    //create a flower in a random location
    let flower1 = createFlower();
    //add the flower to the flowers array
    flowers.push(flower1);
  }
}

function createFlower() {
  let flower = {
    x: random(20,380),
    y: random(20,380),
    size: random(20,75),
    lifespan: random(255,300),
    color: color(random(255), random(255), random(255))
  };
  
  return flower;
}

function drawFlower(flower) {
  noStroke();
  fill(flower.color);
  
  // Draw petals.
  ellipse(flower.x, flower.y, flower.size / 2, flower.size);
  ellipse(flower.x, flower.y, flower.size, flower.size / 2);

  // Draw center.
  fill(255, 204, 0);
  circle(flower.x, flower.y, flower.size / 2);
  
  // Apply wilting effect
  flower.size = flower.size * 0.99; // Shrink size
}