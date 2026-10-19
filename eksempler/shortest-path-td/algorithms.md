
# Algoritmer til Tower Defence med shortest path

## Shortest path BFS

```pseudo
Algorithm ShortestPathBFS

Input: 
- A graph G.
- A start node s.
- A terminal node t.

Output: 
- If a path from s to t exists: A list of nodes containing a shortest path from s to t,
- If there is no path from s to t: The shortest-path tree rooted at node s, containing the shortest path to all other vertices.

Procedure:
    Let Q be a Queue of length at least equal to the number of nodes in G.
    Add s to Q.

    While Q is not empty:
        Let n be the front node of Q and remove it from Q.
        Mark n as visited.

        if n is the terminal node t:
            Return the list of nodes that the procedure has traversed to reach n.
        End If

        Add the unvisited neighbors of n to Q, and save n as the node they came from.
    End While

    Return the shortest-path tree rooted at node s.
End procedure
```

```js
class BinaryMatrixGraph {

    #arr;

    constructor(arr, numRows, numCols) {
        this.#arr = arr;
        this.numRows = numRows;
        this.numCols = numCols;
        this.numElems = numCols * numRows;
    }

    valueAt(n) {
        return this.#arr[n.row][n.col];
    }

    inBounds(n) {
        let validRow = n.row >= 0 && n.row < this.numRows;
        let validCol =  n.col >= 0 && n.col < this.numCols;
        return validRow && validCol;
    }

    neighbors(n) {
        let neighbors = [];
        let directions = [[0,-1],[1,0],[0,1],[-1,0]];
        for (let dir of directions) {
            let m = {
                row: n.row-dir[0], 
                col: n.col-dir[1]
                };
            if (this.inBounds(m) && !this.valueAt(m)) {
                neighbors.push(m)
            }
        }
        return neighbors;
    }

    identicalNodes(n,m) {
        return n.row === m.row && n.col === m.col;
    }

    key(n) {
        return n.row + ',' + n.col;
    }


}
```

```js
function shortestPathBFS(s,t,g) {
    let path = [];
    let visitedSet = new Set();
    let prevMap = new Map();
    // Let Q be a Queue of length at least equal to the number of nodes in G.
    let q = new Queue(g.numElems);
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
                path.push(n);
            }
            path.reverse();
            return path;
        }
        let neighbors = g.neighbors(n);
        //     Add the neighbors of n to Q, and save n as the node they came from.
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
```

## Queue data structure

```js
class Queue {
    #first = 0;
    #last = 0;
    #count = 0;
    #arraySize;
    #data;

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
```
