// ---------------------- //
// White-box unit tests of the PriorityQueue data structure (PriorityQueue.js).
//
// The method under test is enqueue()/dequeue():
//   - Items are dequeued in ascending priority order (min-heap).
// ---------------------- //

function runPriorityQueueTests() {
    describe("PriorityQueue");

    test("enqueue followed by dequeue returns the same item", () => {
        const pq = new PriorityQueue();
        pq.enqueue("A", 10);
        assertEquals(pq.dequeue(), "A");
    });

    test("items leave the queue in ascending priority order", () => {
        const pq = new PriorityQueue();
        pq.enqueue("low", 3);
        pq.enqueue("high", 1);
        pq.enqueue("mid", 2);
        assertEquals(pq.dequeue(), "high");
        assertEquals(pq.dequeue(), "mid");
        assertEquals(pq.dequeue(), "low");
    });

    test("a new priority queue is empty", () => {
        const pq = new PriorityQueue();
        assertTrue(pq.isEmpty());
    });

    test("after enqueue the queue is not empty", () => {
        const pq = new PriorityQueue();
        pq.enqueue("x", 5);
        assertTrue(!pq.isEmpty());
    });

    test("after dequeue of the last item the queue is empty again", () => {
        const pq = new PriorityQueue();
        pq.enqueue("x", 5);
        pq.dequeue();
        assertTrue(pq.isEmpty());
    });

    test("dequeue on an empty queue returns undefined", () => {
        const pq = new PriorityQueue();
        assertEquals(pq.dequeue(), undefined);
    });

    test("items with equal priority are all dequeued", () => {
        const pq = new PriorityQueue();
        pq.enqueue("a", 1);
        pq.enqueue("b", 1);
        pq.enqueue("c", 1);
        const first = pq.dequeue();
        const second = pq.dequeue();
        const third = pq.dequeue();
        assertEquals([first, second, third].sort(), ["a", "b", "c"]);
    });

    test("size reports the number of items in the queue", () => {
        const pq = new PriorityQueue();
        assertEquals(pq.size(), 0);
        pq.enqueue("a", 1);
        assertEquals(pq.size(), 1);
        pq.enqueue("b", 2);
        assertEquals(pq.size(), 2);
        pq.dequeue();
        assertEquals(pq.size(), 1);
    });
}