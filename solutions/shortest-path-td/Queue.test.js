
// ---------------------- //
// White-box unit tests of the Queue data structure (Queue.js).
//
// The method under test is enqueue():
//   - Adds item to the queue.
//   - Throws an error if the queue is full (maxNumItems items).
// ---------------------- //

function runQueueTests() {
    describe("Queue");

    // ---- Tests for enqueue() ---- //

    test("enqueue makes an empty queue non-empty", () => {
        const q = new Queue(3);
        q.enqueue("A");
        assertTrue(!q.isEmpty());
    });

    test("enqueue followed by dequeue makes the queue empty", () => {
        const q = new Queue(3);
        q.enqueue("A");
        q.dequeue();
        assertTrue(q.isEmpty());
    });

    test("enqueue followed by dequeue returns the same item", () => {
        const q = new Queue(3);
        q.enqueue("A");
        assertEquals(q.dequeue(), "A");
    });

    test("items leave the queue in the same order they were added (FIFO)", () => {
        const q = new Queue(5);
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        assertEquals(q.dequeue(), 1);
        assertEquals(q.dequeue(), 2);
        assertEquals(q.dequeue(), 3);
    });

    test("a queue can be filled up to its maximum size without error", () => {
        const q = new Queue(2);
        q.enqueue("a");
        q.enqueue("b");
        assertEquals(q.dequeue(), "a");
        assertEquals(q.dequeue(), "b");
    });

    test("enqueue on a full queue throws an error", () => {
        const q = new Queue(2);
        q.enqueue("a");
        q.enqueue("b");
        assertThrows(() => q.enqueue("c"));
    });

    test("the circular buffer wraps around without losing items", () => {
        const q = new Queue(3);
        q.enqueue("a");
        q.enqueue("b");
        q.enqueue("c");
        q.dequeue();                    // removes "a"
        q.dequeue();                    // removes "b"
        q.enqueue("d");
        q.enqueue("e");                 // the queue is full again
        assertEquals(q.dequeue(), "c");
        assertEquals(q.dequeue(), "d");
        assertEquals(q.dequeue(), "e");
    });

    test("enqueue works with different types (numbers, strings, arrays)", () => {
        const q = new Queue(3);
        q.enqueue(42);                  // number
        q.enqueue("text");              // string
        q.enqueue([2, 3]);              // node [row, col]
        assertEquals(q.dequeue(), 42);
        assertEquals(q.dequeue(), "text");
        assertEquals(q.dequeue(), [2, 3]);
    });

    test("peek shows the front item after enqueue", () => {
        const q = new Queue(3);
        q.enqueue("x");
        q.enqueue("y");
        assertEquals(q.peek(), "x");
    });

    test("a queue of size one can be filled and emptied", () => {
        const q = new Queue(1);
        q.enqueue("only");
        assertThrows(() => q.enqueue("too many"));
        assertEquals(q.dequeue(), "only");
        assertTrue(q.isEmpty());
    });
}
