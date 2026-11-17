/**
 * Finds the cheapest path in a weighted graph g from a start node s to a terminal node t using Dijkstra's algorithm.
 *
 * The graph g must provide the following interface:
 *   - g.numberOfNodes()       total number of nodes
 *   - g.key(n)                a unique string key for a node n
 *   - g.identicalNodes(a, b)  true if nodes a and b represent the same node
 *   - g.neighbors(n)          array of nodes reachable from n in one step
 *   - g.cost(n)               the movement cost of entering node n (positive number, 0 = blocked)
 *
 * The type of a node is not fixed here: it is defined by the graph type of g.
 *
 * @template TNode
 * @param {TNode} s - Start node
 * @param {TNode} t - Terminal node
 * @param {object} g  - Graph object with the methods above.
 * @returns {TNode[]} An array of nodes forming the cheapest path from s to t,
 *   Returns an empty array if no path from s to t exists.
 */
function shortestPathDijkstra(s, t, g) {
    let path = [];
    let dist = new Map();
    let prevMap = new Map();
    let processed = new Set();

    const INF = Infinity;

    // The distance to the start node is 0.
    dist.set(g.key(s), 0);

    // Priority queue of (node, tentative distance)
    let pq = new PriorityQueue();
    pq.enqueue(s, 0);

    while (!pq.isEmpty()) {
        // Let n be the node with the smallest tentative distance.
        let n = pq.dequeue();
        let n_key = g.key(n);

        // Skip if we have already finalized this node (lazy deletion).
        if (processed.has(n_key)) continue;
        processed.add(n_key);

        // If n is the terminal node, reconstruct and return the path.
        if (g.identicalNodes(n, t)) {
            path.push(n);
            while (prevMap.has(n_key)) {
                n = prevMap.get(n_key);
                n_key = g.key(n);
                path.push(n);
            }
            path.reverse();
            break;
        }

        let nDist = dist.get(n_key);
        if (nDist === undefined) nDist = INF;

        let neighbors = g.neighbors(n);
        // Relax all outgoing edges from n.
        for (let m of neighbors) {
            let m_key = g.key(m);
            if (processed.has(m_key)) continue;

            let edgeCost = g.cost(m);
            let newDist = nDist + edgeCost;
            let oldDist = dist.get(m_key);

            if (oldDist === undefined || newDist < oldDist) {
                dist.set(m_key, newDist);
                prevMap.set(m_key, n);
                pq.enqueue(m, newDist);
            }
        }
    }

    return path;
}