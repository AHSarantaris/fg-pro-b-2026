class WeightedMatrixGraph {

    #arr; 
    #numRows; 
    #numCols; 

    /**
    * A grid graph backed by a 2D weighted matrix.
    * Nodes are [row, col] pairs, and the grid cell at those coordinates has
    * a movement cost: 0 = blocked, positive integer = cost to enter the cell.
    *
    * @param {number[][]} arr    - The grid as a 2D array of costs (0 = blocked).
    * @param {number} numRows    - Number of rows in the grid.
    * @param {number} numCols    - Number of columns in the grid.
    */
    constructor(arr, numRows, numCols) {
        this.#arr = arr;
        this.#numRows = numRows;
        this.#numCols = numCols;
    }

    valueAt(n) {
        return this.#arr[n[0]][n[1]];
    }

    /**
     * Returns the movement cost of entering node n.
     * @param {number[]} n - a node in the form of a two-element array [row, col]
     * @returns {number} - the cost of the cell (0 if blocked)
     */
    cost(n) {
        return this.#arr[n[0]][n[1]];
    }

    inBounds(n) {
        let validRow = n[0] >= 0 && n[0] < this.#numRows;
        let validCol = n[1] >= 0 && n[1] < this.#numCols;
        return validRow && validCol;
    }

    /**
     * Given the node n, the function returns the list of neighbors of n.
     * Only cells inside the grid with a cost greater than 0 are neighbors.
     * @param {number[]} n - a node in the form of a two-element array containing the row- and column index
     * @returns {number[][]} - an array of nodes in the form of two-element arrays
     */
    neighbors(n) {
        let neighbors = [];
        let directions = [[0,-1],[1,0],[0,1],[-1,0]];
        for (let dir of directions) {
            let m = [n[0]-dir[0], n[1]-dir[1]];
            if (this.inBounds(m) && this.valueAt(m) > 0) {
                neighbors.push(m)
            }
        }
        return neighbors;
    }

    identicalNodes(n,m) {
        return n[0] === m[0] && n[1] === m[1];
    }

    key(n) {
        return n[0] + ',' + n[1];
    }

    numberOfNodes() {
        return this.#numCols * this.#numRows;
    }
}