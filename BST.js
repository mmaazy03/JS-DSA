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
}

const tree = new BST();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);
tree.insert(10);
tree.insert(0);
tree.insert(1.5);
console.log(tree.includes(0.75));
// console.log(tree);
