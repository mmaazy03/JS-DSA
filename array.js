class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }

  get(index) {
    return this.data[index];
  }

  shift() {
    delete this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  deleteByIndex(index) {
    this.data[index];

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const array = new MyArray();

array.push({ name: "Mango" });
array.push({ name: "Orange" });
array.push({ name: "Apple" });
array.push({ name: "Grapefruit" });
array.deleteByIndex(3);

// console.log("afyter", array);

// chunks([1,2,3,4,5,6,7,8,9],3)

// const getChunksOfArray = (array, chunk) => {
//   const breakOn = chunk;
//   let count = 1;
//   let result = [];
//   let tempArray = [];

//   for (let i = 0; i < array.length; i++) {

//     if (count === breakOn) {
//       console.log("count === breakOn", tempArray.push(array[i]));
//       result.push(tempArray);
//       tempArray = [];
//       count = 1;
//     } else {
//       tempArray.push(array[i]);
//       count++;
//     }
//   }

//   if (tempArray.length > 0) result.push(tempArray);

//   console.log("R", result);
//   console.log("temp", tempArray);
// };

const getChunksOfArray = (array, chunk) => {
  let index = 0;
  const result = [];

  while (index < array.length) {
    const chunked = array.slice(index, index + chunk);

    index = index + chunk;
    result.push(chunked);
  }
  console.log("result", result);
};

getChunksOfArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
