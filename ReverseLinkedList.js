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

  // 1->2->3->4->5
  // <-1<-2<-3<-4<-5
  // 5->4->3->2->1->

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      //1st loop
      // null<-1
      // 2 = 1.next =2
      // prev(null)=1

      // 2nd loop
      // 3 = 2.next =3
      // 2.next = 1
      // 1(prev) = 2
      // 2(temp) = 3

      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }
}

const myLinkedList = new DoublyLinkedList(1);

myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.reverse();

console.log("myLinkedList", myLinkedList);
