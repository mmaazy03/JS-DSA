function countDown(number) {
  if (number === 0) {
    return;
  }

  console.log(number);
  countDown(number - 1);
}

// function factorial(number) {
//   let result = 1;
//   let array = [];

//   for (let i = 5; i > 0; i--) {
//     console.log("I", i);
//     array.push(i);
//     result = result * i;
//   }
//   console.log("Ar", array);
//   console.log("RES", result);
// }

function factorial(number) {
  return number === 0 ? 1 : number * factorial(number - 1);
}

console.log(factorial(5));
