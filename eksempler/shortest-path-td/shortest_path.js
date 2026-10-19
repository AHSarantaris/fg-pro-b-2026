function shortestPathBFS(s,t,g) {
    let path = [];
    let visitedSet = new Set();
    let prevMap = new Map();
    // Let Q be a Queue of length at least equal to the number of nodes in G.
    let q = new Queue(g.numberOfNodes());
    // Add s to Q.
    visitedSet.add(g.key(s))
    q.enqueue(s);
    // While Q is not empty:
    while (!q.isEmpty()) {
        // Let n be the front node of Q and remove it from Q.
        let n = q.dequeue();
        let n_key = g.key(n)
        // Mark n as visited.
        visitedSet.add(n_key);
        // if n is the terminal node t:
        if (g.identicalNodes(n,t)) {
            // Return the list of nodes that the procedure has traversed to reach n.
            path.push(n)
            while (prevMap.has(n_key)) {
                n = prevMap.get(n_key);
                n_key = g.key(n);
                path.push(n);
            }
            path.reverse();
            return path;
        }
        let neighbors = g.neighbors(n);
        //     Add the neighbors of n to Q, and mark n as the node they came from.
        for (let m of neighbors) {
            let m_key = g.key(m);
            if (!visitedSet.has(m_key)) {
                visitedSet.add(m_key);
                q.enqueue(m);
                prevMap.set(m_key,n);
            }
        }
    }
    // Return the shortest-path tree rooted at node s.
    return prevMap;
}  

class BinaryMatrixGraph {

    #arr; 
    #numRows; 
    #numCols; 

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

    neighbors(n) {
        let neighbors = [];
        let directions = [[0,-1],[1,0],[0,1],[-1,0]];
        for (let dir of directions) {
            let m = [n[0]-dir[0], n[1]-dir[1]];
            if (this.inBounds(m) && !this.valueAt(m)) {
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


class Queue {
    #first = 0;
    #last = 0;
    #count = 0;
    #data;
    #arraySize;

    constructor(l) {
        this.#data = new Array(l);
        this.#arraySize = l;
    }

    enqueue(n) {
        if (this.#count === this.#arraySize) {
            throw new Error("Queue is full");
        }
        this.#data[this.#last] = n;
        this.#last += 1;
        this.#last %= this.#arraySize;
        this.#count += 1;
    }

    dequeue() {
        let n = this.#data[this.#first];
        this.#data[this.#first] = undefined;
        this.#first += 1;
        this.#first %= this.#arraySize;
        this.#count -= 1;
        return n;
    }

    isEmpty() {
        return this.#count === 0;
    }
}