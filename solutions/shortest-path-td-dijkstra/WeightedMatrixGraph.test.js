// ---------------------- //
// White-box unit tests of the WeightedMatrixGraph data structure
// (WeightedMatrixGraph.js).
//
// The methods under test are neighbors(n) and cost(n):
//   - neighbors(n) returns reachable cells (up, down, left, right)
//     with a cost > 0 (not blocked).
//   - cost(n) returns the movement cost stored in the cell.
// ---------------------- //

function assertSameNeighbors(actual, expected) {
    assertEquals(actual.sort(), expected.sort());
}

function runWeightedMatrixGraphTests() {
    describe("WeightedMatrixGraph");

    test("an open cell in the middle of a grid has 4 neighbors", () => {
        const g = new WeightedMatrixGraph([
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ], 3, 3);
        assertSameNeighbors(g.neighbors([1, 1]), [[0, 1], [1, 0], [1, 2], [2, 1]]);
    });

    test("blocked cells (cost 0) are not returned as neighbors", () => {
        const g = new WeightedMatrixGraph([
            [1, 0, 1],
            [1, 1, 0],
            [0, 1, 1]
        ], 3, 3);
        assertSameNeighbors(g.neighbors([1, 1]), [[0, 1], [1, 0], [2, 1]]);
    });

    test("slow cells (cost > 1) are still valid neighbors", () => {
        const g = new WeightedMatrixGraph([
            [1, 2, 1],
            [1, 1, 1],
            [1, 1, 1]
        ], 3, 3);
        assertSameNeighbors(g.neighbors([0, 1]), [[0, 0], [0, 2], [1, 1]]);
    });

    test("cost(n) returns the cell value", () => {
        const g = new WeightedMatrixGraph([
            [1, 2],
            [3, 0]
        ], 2, 2);
        assertEquals(g.cost([0, 0]), 1);
        assertEquals(g.cost([0, 1]), 2);
        assertEquals(g.cost([1, 0]), 3);
        assertEquals(g.cost([1, 1]), 0);
    });

    test("a single-cell grid with cost 0 has no neighbors", () => {
        const g = new WeightedMatrixGraph([[0]], 1, 1);
        assertEquals(g.neighbors([0, 0]), []);
    });

    test("a single-cell grid with cost > 0 has no neighbors (no other cells)", () => {
        const g = new WeightedMatrixGraph([[5]], 1, 1);
        assertEquals(g.neighbors([0, 0]), []);
    });

    test("neighbors in a one-row grid are left and right", () => {
        const g = new WeightedMatrixGraph([[1, 1, 1]], 1, 3);
        assertSameNeighbors(g.neighbors([0, 1]), [[0, 0], [0, 2]]);
    });
}