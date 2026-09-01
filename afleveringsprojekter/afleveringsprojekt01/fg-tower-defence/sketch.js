let canvasSize =  500;
let numGridElems = 10;
let monsters = [];
let towers = [];
let bullets = [];
let maxNumMonsters = 6;
let frameCount = 0;

let U_LEFT, U_RIGHT, U_UP, U_DOWN;

let grid = {
    numElems: numGridElems,
    sizeElems: canvasSize/numGridElems, // size of grid elements in pixel
    data: [
        [],
        [],
        [],
        [1,1,1,1,0,0,0,0,0,0],
        [0,0,0,1,0,0,1,1,1,1],
        [0,0,0,1,0,0,1,0,0,0],
        [0,0,0,1,0,0,1,0,0,0],
        [0,0,0,1,1,1,1,0,0,0],
        [],
        []
    ],
}

// let startElem = grid.data.findIndex((element) => element.indexOf(1));
let startElem = 4;

function createMonster() {

    let monster = {
        p: createVector(0, startElem * grid.sizeElems - grid.sizeElems/2),
        u: U_RIGHT,
        v: 1,
        size: 20,
    };
    return monster;
}

function setup() {
    createCanvas(canvasSize, canvasSize);
    U_LEFT = createVector(-1,0);
    U_RIGHT = createVector(1,0);
    U_UP = createVector(0,-1);
    U_DOWN = createVector(0,1);
    // monsters.push(createMonster())
}

function draw() {
    frameCount++;
    background(95, 135, 49);
    for (let i=0; i < grid.numElems; i++) {
        line(0,i*grid.sizeElems,width,i*grid.sizeElems)
    }
    for (let i=0; i < grid.numElems; i++) {
        line(i*grid.sizeElems,0,i*grid.sizeElems,canvasSize)
    }
    for(let i=0; i < grid.numElems; i++){
        if (grid.data[i].length > 0) {
            for(let j=0; j<grid.numElems; j++) {
                if (grid.data[i][j] === 1) {
                    fill(176, 136, 93)
                    rect(j*grid.sizeElems,i*grid.sizeElems,grid.sizeElems)
                }

            }
        }
    }
    if (monsters.length < maxNumMonsters && frameCount > 0.5*frameRate()) {
        frameCount = 0;
        monsters.push(createMonster())
    }
    moveMonsters()
    drawMonsters()
    drawTowers()
    drawBullets()
}


function mouseClicked(event) {
    let tp_mouse = getTilePosition(createVector(mouseX, mouseY));
    towers.push(createTower(tp_mouse));
}



function drawMonsters() {
    for (let i = 0; i<monsters.length; i++) {
        let m = monsters[i];
        fill("black")
        circle(m.p.x,m.p.y,m.size);
    }
}

function moveMonsters() {
    for (let i = 0; i<monsters.length; i++) {
        let m = monsters[i];
        m.p.add(p5.Vector.mult(m.u,m.v));
        let tp = getTilePosition(m.p);
        let tp_next = p5.Vector.add(tp,m.u);
        let pt = getPositionOnTile(m.p);
        // console.log(pt.toString())

        let nextTileIsEmpty = grid.data[tp_next.y].length === 0 || grid.data[tp_next.y][tp_next.x] === 0;

        let tileCenter = createVector(
            (tp.x + 0.5) * grid.sizeElems,
            (tp.y + 0.5) * grid.sizeElems
        );
        let pastCenter = p5.Vector.dot(p5.Vector.sub(m.p, tileCenter), m.u);
        let monsterIsHalfwayOnTile = pastCenter >= 0;

        if (nextTileIsEmpty && monsterIsHalfwayOnTile) {
            console.log(abs(p5.Vector.dot(pt,m.u)))
            if (grid.data[tp.y][tp.x+1] === 1 && !m.u.equals(U_LEFT)) {
                m.u = U_RIGHT;
            } else if (grid.data[tp.y][tp.x-1] === 1 && !m.u.equals(U_RIGHT)) {
                m.u = U_LEFT;
            } else if (grid.data[tp.y+1][tp.x] === 1 && !m.u.equals(U_UP)) {
                m.u = U_DOWN;
            } else if (grid.data[tp.y-1][tp.x] === 1 && !m.u.equals(U_DOWN)) {
                m.u = U_UP;
            }
        }
    }
}

/** Returns the tile position of the monster in the format [col, row] */
function getTilePosition(p) {
    let tilePosition = createVector(
        floor(p.x/grid.sizeElems),
        floor(p.y/grid.sizeElems)
    );
    return tilePosition;
}

function getPositionOnTile(q) {
    let p = createVector(q.x % grid.sizeElems,q.y % grid.sizeElems);
    return p;
}

function createTower(tp) {
    let i = tp.y;
    let j = tp.x;
    grid.data[i][j] = 2;
    let tower = {
        i: i,
        j: j,
        p: createVector(
            j*grid.sizeElems + grid.sizeElems / 2,
            i*grid.sizeElems + grid.sizeElems / 2
        ),
        dir: createVector(-1,0),
        spawned: frameCount,
        lengthTurret: 20,
        range: 200,
    }
    return tower;
}

function drawTowers() {
    for (let i = 0; i < towers.length; i++) {
        let t = towers[i];
        aimTower(t);
        strokeWeight(4)
        let temp = p5.Vector.add(t.p,p5.Vector.mult(t.dir,t.lengthTurret))
        line(t.p.x,t.p.y,temp.x,temp.y)
        strokeWeight(1)
        fill(0)
        circle(t.p.x, t.p.y, grid.sizeElems/2)
        fill(0,0)
        circle(t.p.x, t.p.y, t.range)
    }
}

function aimTower(t) {
    let minDist = t.p.dist(monsters[0].p);
    let minDistIndex = 0;
    for (let i = 1; i < monsters.length; i++) {
        let currentDist = t.p.dist(monsters[i].p);
        if (currentDist < minDist) {
            minDist = currentDist;
            minDistIndex = i;
        }
    }
    let distVector = p5.Vector.sub(monsters[minDistIndex].p, t.p);
    t.dir = p5.Vector.div(distVector,minDist);
}

function towerShoot(t,m) {
    bullets.push(createBullet(t.p,m))
}

function createBullet(p,target) {
    let bullet = {
        p: p,
        v: 10,
        target: target,
    }
    return bullet;
}

function drawBullets() {
    for (let i = 0; i < bullets.length; i++) {
        
    }
}