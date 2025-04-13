class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    //?? this tail.next updates the current tail(that is at 1) next value
    this.tail = newNode;
    // ?? this.tail contains the new node so its efficient to add new node
    this.length++;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head.next;
    this.head = temp;

    // 1. point first node and element
    // let temp = this.head;
    // this.head = this.head.next;

    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    console.log("TEM", temp);
  }

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

const myLinkedList = new LinkedList(0);

myLinkedList.push(1);
myLinkedList.push(2);
// console.log("myLinkedList before pop", JSON.stringify(myLinkedList, null, 2));
myLinkedList.pop();
// myLinkedList.unshift(4);
// myLinkedList.shift();
// console.log(myLinkedList.getFirst());
// myLinkedList.getLast();
// console.log(myLinkedList.getLast());
// console.log(myLinkedList.getIndex(0));
// console.log(myLinkedList.set(0, 10));
// console.log(myLinkedList.insert(2, 4));
// console.log(myLinkedList.size());
// console.log(myLinkedList.clear());

console.log("myLinkedList", JSON.stringify(myLinkedList, null, 2));
