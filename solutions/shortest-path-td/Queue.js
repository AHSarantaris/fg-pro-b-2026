

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
     * 
     * @template Item - Can be any type
     * @param {Item} item - The item to be enqueued
     */
    enqueue(item) {
        if (this.#count === this.#arraySize) {
            throw new Error("Queue is full");
        }
        this.#data[this.#last] = item;
        this.#last += 1;
        this.#last %= this.#arraySize;
        this.#count += 1;
    }

    
    peek() {
        return this.#data[this.#first];
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