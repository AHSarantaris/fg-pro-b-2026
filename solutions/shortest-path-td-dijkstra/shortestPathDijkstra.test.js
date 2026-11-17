// ---------------------- //
// Unit tests of shortestPathDijkstra (shortestPathDijkstra.js).
// ---------------------- //

function runDijkstraTests() {
    describe("shortestPathDijkstra");

    // Helper to build a small weighted grid and run the algorithm.
    function buildGrid(arr) {
        const rows = arr.length;
        const cols = arr[0].length;
        return new WeightedMatrixGraph(arr, rows, cols);
    }

    test("start equals target returns a path with just the start node", () => {
        const g = buildGrid([[1, 1], [1, 1]]);
        const path = shortestPathDijkstra([0, 0], [0, 0], g);
        assertEquals(path, [[0, 0]]);
    });

    test("finds a path in an unweighted grid", () => {
        const g = buildGrid([
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ]);
        const path = shortestPathDijkstra([0, 0], [2, 2], g);
        assertEquals(path.length, 5); // 4 edges
        assertEquals(path[0], [0, 0]);
        assertEquals(path[path.length - 1], [2, 2]);
    });

    test("returns empty path when target is unreachable", () => {
        const g = buildGrid([
            [1, 0],
            [0, 1]
        ]);
        const path = shortestPathDijkstra([0, 0], [1, 1], g);
        assertEquals(path, []);
    });

    test("prefers a longer path with lower total cost over a short path through slow cells", () => {
        // Grid:
        // 1  100 1
        // 1  1   1
        // 1  1   1
        // From [0,0] to [0,2]: direct is 1+100+1=102, going down is 1+1+1+1+1=5
        const g = buildGrid([
            [1, 100, 1],
            [1, 1,   1],
            [1, 1,   1]
        ]);
        const path = shortestPathDijkstra([0, 0], [0, 2], g);
        // Path should go through row 1 or 2, not through [0,1]
        const hasSlowCell = path.some(p => p[0] === 0 && p[1] === 1);
        assertTrue(!hasSlowCell, "Path should not go through the slow cell [0,1]");
    });

    test("path cost is minimal", () => {
        const g = buildGrid([
            [1, 1, 1],
            [1, 50, 1],
            [1, 1, 1]
        ]);
        const path = shortestPathDijkstra([0, 0], [2, 2], g);
        // Expected path around the slow center: cost 5 (four steps of cost 1)
        let cost = 0;
        for (let i = 1; i < path.length; i++) {
            cost += g.cost(path[i]);
        }
        assertEquals(cost, 5, "Expected minimal cost 5, got " + cost);
    });
}