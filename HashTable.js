class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  _hashFunction(key) {
    let sum = 0;
    const PRIME_NUMBER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const charCode = key.charCodeAt(0) - 96;
      sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
    }
    return sum;
  }

  set(key, value) {
    const index = this._hashFunction(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hashFunction(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  getAllKeys() {
    const keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      console.log("his.keyMap[i]", this.keyMap[i]);
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          console.log("this.keyMap[i][j][0]", this.keyMap[i][j]);
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }

    return keys;
  }

  getAllValues() {
    const keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      console.log("his.keyMap[i]", this.keyMap[i]);
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          console.log("this.keyMap[i][j][0]", this.keyMap[i][j]);
          keys.push(this.keyMap[i][j][1]);
        }
      }
    }

    return keys;
  }
}

const hash = new HashTable();
hash.set("name", "maaz");
hash.set("name", "maaz2");
console.log(hash.get("name"));
console.log(hash.getAllKeys());
console.log(hash.getAllValues());

console.log("h", hash);
