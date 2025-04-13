class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }

    const temp = this.first;
    this.first = temp.next;
    temp.next = null;

    this.length--;
  }
}

const queue = new Queue(0);

queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();

console.log("queue", JSON.stringify(queue, null, 2));
