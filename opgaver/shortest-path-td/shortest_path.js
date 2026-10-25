/**
 * Finds the shortest path in an unweighted graph g from a start node s to a terminal node t using breadth-first search (BFS).
 *
 * The graph g must provide the following interface:
 *   - g.numberOfNodes()       total number of nodes (used as the queue size)
 *   - g.key(n)                a unique string key for a node n
 *   - g.identicalNodes(a, b)  true if nodes n and m represent the same node
 *   - g.neighbors(n)          array of nodes reachable from n in one step

 * 
 * The type of a node is not fixed here: it is defined by the graph type of g, so any node representation is allowed as long as the graph supports it.
 * 
 * @template TNode
 * @param {TNode} s - Start node
 * @param {TNode} t - Terminal node
 * @param {object} g  - Graph object with the methods numberOfNodes(), key(), identicalNodes() and neighbors().
 * @returns {TNode[]} An array of nodes forming the shortest path from s to t,
 *   Returns an empty array if no path from s to t exists.
 */
function shortestPathBFS(s,t,g) {
    let path = [];
    let visitedSet = new Set();
    let prevMap = new Map();
    // Let Q be a Queue of length at least equal to the number of nodes in G.
    let q = new Queue(g.numberOfNodes());

    // Implementér resten af koden herunder
    // ...
    
    return path;
}  


class BinaryMatrixGraph {

    #arr; 
    #numRows; 
    #numCols; 

    /**
    * A grid graph backed by a 2D binary matrix.
    * Nodes are [row, col] pairs, and the grid cell at those coordinates is
    * either open (0) or blocked (1).
    *
    * @param {number[][]} arr    - The grid as a 2D array of 0 (open) / 1 (blocked).
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

    inBounds(n) {
        let validRow = n[0] >= 0 && n[0] < this.#numRows;
        let validCol = n[1] >= 0 && n[1] < this.#numCols;
        return validRow && validCol;
    }

    /**
     * Given the node n, the method returns the list of neighbors of n.
     * @param {number[]} n - a node in the form of a two-element array containing the row- and column index
     * @returns {number[][]} - an array of nodes in the form of two-element arrays
     */
    neighbors(n) {
        // Implementér denne metode
        // ...
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


class Queue {
    #first = 0;
    #last = 0;
    #count = 0;
    #data;
    #arraySize;

    /**
     * A queue based on a circular array stored in the variable #data .
     * 
     * @param {number} maxNumItems - Maximum number of items that the queue can hold.
     */
    constructor(maxNumItems) {
        this.#data = new Array(maxNumItems);
        this.#arraySize = maxNumItems;
    }

    
    /**
     * Adds item to the queue.
     * Throws an error if the queue is full
     * @template Item - Can be any type
     * @param {Item} item - The item to be enqueued
     */
    enqueue(item) {
        // Implementér denne metode
        // ...
    }

    dequeue() {
        let item = this.#data[this.#first];
        this.#data[this.#first] = undefined;
        this.#first += 1;
        this.#first %= this.#arraySize;
        this.#count -= 1;
        return item;
    }

    isEmpty() {
        return this.#count === 0;
    }
}