class PriorityQueue {
    #heap = [];

    #swap(i, j) {
        [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]];
    }

    #parent(i) {
        return Math.floor((i - 1) / 2);
    }

    #left(i) {
        return 2 * i + 1;
    }

    #right(i) {
        return 2 * i + 2;
    }

    #siftUp(i) {
        while (i > 0) {
            let p = this.#parent(i);
            if (this.#heap[p].priority <= this.#heap[i].priority) break;
            this.#swap(p, i);
            i = p;
        }
    }

    #siftDown(i) {
        let n = this.#heap.length;
        while (true) {
            let smallest = i;
            let l = this.#left(i);
            let r = this.#right(i);
            if (l < n && this.#heap[l].priority < this.#heap[smallest].priority) smallest = l;
            if (r < n && this.#heap[r].priority < this.#heap[smallest].priority) smallest = r;
            if (smallest === i) break;
            this.#swap(i, smallest);
            i = smallest;
        }
    }

    /**
     * Adds an item with the given priority. Lower priority values are dequeued first.
     * @param {*} item - The item to enqueue
     * @param {number} priority - The priority (lower = higher urgency)
     */
    enqueue(item, priority) {
        this.#heap.push({item, priority});
        this.#siftUp(this.#heap.length - 1);
    }

    /**
     * Removes and returns the item with the lowest priority.
     * @returns {*} The dequeued item, or undefined if the queue is empty.
     */
    dequeue() {
        if (this.isEmpty()) return undefined;
        const top = this.#heap[0];
        const last = this.#heap.pop();
        if (this.#heap.length > 0) {
            this.#heap[0] = last;
            this.#siftDown(0);
        }
        return top.item;
    }

    peek() {
        return this.isEmpty() ? undefined : this.#heap[0].item;
    }

    isEmpty() {
        return this.#heap.length === 0;
    }

    size() {
        return this.#heap.length;
    }
}