class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let temp = this.root;

    while (true) {
      // ?? in below code
      // ?? we assign root to temp and check if current value is less than new node then take it to left
      // ??  going to left we check if current temp has left if not then assign temp left to new node
      // ?? and in case if temp has a left then we make the temp left as the new temp value and traverse again checking all conditions for greater and less

      // ?? we assign root to temp and check if current value is greater than new node then take it to right
      // ??  going to right we check if current temp has right if not then assign temp right to new node
      // ?? and in case if temp has a right then we make the temp right as the new temp value and traverse again checking all conditions for greater and less

      if (newNode.value === temp.value) {
        return undefined;
      }

      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        } else {
          temp = temp.left;
        }
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        } else {
          temp = temp.right;
        }
      }
    }
  }

  includes(value) {
    if (!this.root) {
      return false;
    }

    let temp = this.root;

    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else if (value === temp.value) {
        return true;
      }
    }

    return false;
  }

  bfs() {
    let current = this.root;
    let queue = [];
    let data = [];

    queue.push(current);

    //?? In Breadth first we visit row vise opr breadth wise/
    // ?? when we shift one le,ent from queue it is ususally left node first

    while (queue.length) {
      // console.log("QUEUE--------->>>", queue);
      current = queue.shift();
      // console.log("CURRENT------------->>", current);
      data.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      // console.log("DATA-------------->>>", data);
    }
  }

  dfspre() {
    let current = this.root;
    let stack = [];

    stack.push(current);

    // ?? IN DFS we push current node right first and then left one
    // ?? the reason is that it operates on LIFO(stack) so everytime we push left one in last and
    // ?? and then take out last element from stack using pop it will always consider left value and we will go in depth wise rather than
    // ?? rather than breadth wise

    // ?? IN DFS PRE WE Go left--> and then right
    // ?? the whole logic revolves around pop method this is how it makes it more push

    while (stack.length) {
      current = stack.pop();

      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
  }

  dfspost() {
    let current = this.root;
    let stack = [];
    let data = [];

    stack.push(current);

    // ?? IN DFS we push current node left first and then right one
    // ?? the reason is that it operates on LIFO(stack) so everytime we push right one in last and
    // ?? and then take out last element from stack using pop it will always consider right value and we will go in depth wise rather than
    // ?? rather than breadth wise
    // ?? IN DFS PRE WE Go right--> and then left
    // ?? the whole logic revolves around pop method this is how it makes it
    // ?? and in the end then we do data.reverse() so that whole lost can be reversed
    // ?? and then root will come in last

    while (stack.length) {
      console.log("STACK--------->>>", stack);
      current = stack.pop();
      data.push(current.value);

      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
    }

    data.reverse();
  }
}

const tree = new BST();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);
// tree.insert(10);
// tree.insert(0);
// tree.insert(1.5);
// tree.bfs();
// tree.dfspre();
tree.dfspost();
// console.log(tree);
