// Visual demo of the shortest-path BFS on a binary grid.
// - Left-click a cell to toggle it between open and blocked (wall).
// - The shortest path from S (green) to T (red) is drawn when it exists.

// Rows: Number of rows in the grid.
const ROWS = 7;
// Cols: Number of columns in the grid.
const COLS = 12;
// CELL: Side length in pixels of a single cell.
const CELL = 40;
// MARGIN_X: Left margin.
const MARGIN_X = 20;
// MARGIN_Y: Top margin.
const MARGIN_Y = 60;


let grid;
let graph;
let start = [0, 0];
let target = [ROWS - 1, COLS - 1];
let path = [];

function setup() {
    createCanvas(MARGIN_X * 2 + COLS * CELL, MARGIN_Y * 2 + ROWS * CELL + 40);
    grid = makeGrid();
    computePath();
}

/**
 * Determines the shortest path in @grid from @start to @target , using the data structure @BinaryMatrixGraph and the algorithm @shortestPathBFS implemented in the file shortestPathBFS.js .
 */
function computePath() {
    graph = new BinaryMatrixGraph(grid, ROWS, COLS);
    path = shortestPathBFS(start, target, graph);
}

function makeGrid() {
    // 0 = open, 1 = blocked
    const g = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
    const walls = [
        [0, 5], [0, 8],
        [1, 2], [1, 3], [1, 8],
        [2, 5],
        [3, 1], [3, 7],
        [4, 3], [4, 9],
        [5, 1], [5, 5], [5, 6],
        [6, 4]
    ];
    for (const [r, c] of walls) {
        g[r][c] = 1;
    }
    return g;
}


function draw() {
    background(15, 22, 32);
    drawTitle();
    drawCells();
    drawInfo();
}

function drawTitle() {
    fill(255);
    noStroke();
    textSize(20);
    text('Shortest Path (BFS)', MARGIN_X, 34);
}

function drawCells() {
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            const x = MARGIN_X + c * CELL;
            const y = MARGIN_Y + r * CELL;
            const onPath = path.some(p => p[0] === r && p[1] === c);

            if (grid[r][c] === 1) {
                fill(55, 66, 88);       // blocked (wall)
            } else if (onPath) {
                fill(70, 180, 100);     // on the shortest path
            } else {
                fill(212, 218, 228);    // open
            }
            strokeWeight(1);
            stroke(120, 132, 150);
            rect(x, y, CELL, CELL);
        }
    }
    drawMarker(start, color(0, 170, 70), 'S');
    drawMarker(target, color(230, 55, 55), 'T');
}

function drawInfo() {
    fill(255);
    textAlign(LEFT, TOP);
    textSize(14);
    let info = 'Click a cell to toggle open/blocked.  \nS = start, T = target.\n';
    if (path.length === 0) {
        info = 'No path from S to T exists.';
    } else {
        info += `Path: ${path.length - 1} edge(s), ${path.length} cell(s).`;
    }
    text(info, MARGIN_X, MARGIN_Y + ROWS * CELL + 20);
}

/**
 * Draw a colored marker in a cell to show its label. It is used by @drawCells to mark the start node and terminal node.
 * 
 * @param {number[]} cell - A two-element array, containing the row number and column number of the cell
 * @param {*} col - Color of the marker
 * @param {*} label - Text label of the marker
 */
function drawMarker(cell, col, label) {
    const [r,c] = cell;
    // Determine the x- and y-component of the pixel value of the cell
    const x = MARGIN_X + c * CELL + CELL / 2;
    const y = MARGIN_Y + r * CELL + CELL / 2;
    noStroke();
    fill(col);
    ellipse(x, y, CELL * 0.6);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(18);
    text(label, x, y);
}

function mousePressed() {
    // Determine row and column of the cell that have been clicked by solving the following linear equations for r and c:
    // x = MARGIN_X + c * CELL + CELL / 2
    // y = MARGIN_Y + r * CELL + CELL / 2
    const c = floor((mouseX - MARGIN_X) / CELL);
    const r = floor((mouseY - MARGIN_Y) / CELL);
    if (c < 0 || c >= COLS || r < 0 || r >= ROWS) return;

    const isStart = start[0] === r && start[1] === c;
    const isTarget = target[0] === r && target[1] === c;
    if (isStart || isTarget) return; // keep start and target walkable

    grid[r][c] += 1;
    grid[r][c] %= 2;
    computePath();
}
