class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      //?? if list is empty
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }

  pop() {
    if (!this.head || this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    const temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;

    this.length--;
    temp.next = null;
    temp.prev = null;
    console.log("TEMP", temp);
  }

  unshift(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }

    // this.head.prev = newNode;
    // newNode.next = this.head;
    // this.head = newNode;
    // done by me

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    this.length++;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    let temp = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    temp.prev = null;
    temp.next = null;

    this.length--;
  }

  // below are methods copied from single linked list
  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let temp = this.head;

    while (temp.next) {
      temp = temp.next;
    }
    return temp;
  }

  getIndex(index) {
    let temp = this.head;
    let counter = 0;
    while (temp) {
      if (index === counter) {
        return temp;
      }

      counter++;
      temp = temp.next;
    }

    return null;
  }

  set(index, value) {
    let temp = this.getFirst(index);
    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.length) {
      return this.push(value);
    }

    let newNode = new Node(value);

    let element = this.getIndex(index - 1);

    newNode.next = element.next;
    element.next = newNode;

    this.length++;
  }

  size() {
    // let counter = 0;
    // let temp = this.head;

    // while (temp) {
    //   counter++;
    //   temp = temp.next;
    // }
    // console.log("counter", counter);
    return this.length;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

const myLinkedList = new DoublyLinkedList(0);

myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
// console.log("myLinkedList before pop", JSON.stringify(myLinkedList, null, 2));
// myLinkedList.pop();
// myLinkedList.unshift(4);
myLinkedList.shift();
// console.log(myLinkedList.getFirst());
// myLinkedList.getLast();
// console.log(myLinkedList.getLast());
// console.log(myLinkedList.getIndex(0));
// console.log(myLinkedList.set(0, 10));
// console.log(myLinkedList.insert(2, 4));
// console.log(myLinkedList.size());
// console.log(myLinkedList.clear());

console.log("myLinkedList", myLinkedList);
