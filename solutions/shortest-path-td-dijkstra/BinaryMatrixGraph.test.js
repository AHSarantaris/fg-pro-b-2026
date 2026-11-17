
// ---------------------- //
// White-box unit tests of the BinaryMatrixGraph data structure
// (BinaryMatrixGraph.js).
//
// The method under test is neighbors(n):
//   - Returns the nodes reachable from n in one step (up, down, left, right).
//   - Only open cells (value 0) inside the grid are neighbors.
//   - Blocked cells (value 1) and cells outside the grid are not neighbors.
// ---------------------- //

// Compares the returned neighbors regardless of their order.
function assertSameNeighbors(actual, expected) {
    assertEquals(actual.sort(), expected.sort());
}

function runBinaryMatrixGraphTests() {
    describe("BinaryMatrixGraph");

    // ---- Tests for neighbors() ---- //

    test("an open cell in the middle of a grid has 4 neighbors", () => {
        const g = new BinaryMatrixGraph([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ], 3, 3);
        assertSameNeighbors(g.neighbors([1, 1]), [[0, 1], [1, 0], [1, 2], [2, 1]]);
    });

    test("a corner cell has 2 neighbors", () => {
        const g = new BinaryMatrixGraph([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ], 3, 3);
        assertSameNeighbors(g.neighbors([0, 0]), [[0, 1], [1, 0]]);
    });

    test("an edge cell (not a corner) has 3 neighbors", () => {
        const g = new BinaryMatrixGraph([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ], 3, 3);
        assertSameNeighbors(g.neighbors([0, 1]), [[0, 0], [0, 2], [1, 1]]);
    });

    test("a single-cell grid has no neighbors", () => {
        const g = new BinaryMatrixGraph([[0]], 1, 1);
        assertEquals(g.neighbors([0, 0]), []);
    });

    test("blocked cells are not returned as neighbors", () => {
        const g = new BinaryMatrixGraph([
            [0, 1, 0],
            [0, 0, 1],
            [1, 1, 0]
        ], 3, 3);
        assertSameNeighbors(g.neighbors([1, 1]), [[1, 0]]);
    });

    test("a cell surrounded by walls has no neighbors", () => {
        const g = new BinaryMatrixGraph([
            [0, 1, 0],
            [1, 0, 1],
            [0, 1, 0]
        ], 3, 3);
        assertEquals(g.neighbors([1, 1]), []);
    });

    test("neighbors in a one-row grid are left and right", () => {
        const g = new BinaryMatrixGraph([[0, 0, 0]], 1, 3);
        assertSameNeighbors(g.neighbors([0, 1]), [[0, 0], [0, 2]]);
    });
}
