class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const node = new Node(value);
    this.top = node;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    }
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const temp = this.top;
    temp.next = null;
    this.top = this.top.next;
    this.length--;
  }

  min() {
    if (this.length === 0) {
      return undefined;
    }

    let minValue = this.top.value;
    let temp = this.top;

    while (temp.next) {
      console.log("PREV", temp);
      temp = temp.next;
      minValue = minValue > temp.value ? temp.value : minValue;
      console.log("NEW", temp);
      // ?? the reason for assigning temp first before checking is that
      // ?? if you will check it before then temp will still point to old one
      // ?? leading to not solving properly worst cases
      // ?? and also you won't be able to get last element it will always return null cause while(temp.next) won't run for last element
    }
    console.log("T---->", temp);
    console.log("minValue", minValue);
  }
}

const stack = new Stack(1000);

stack.push(14);
stack.push(23);
stack.push(321);
stack.min();
// stack.pop();

console.log("stack", JSON.stringify(stack, null, 2));
