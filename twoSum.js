function twoSum(numbers, target) {
  const object = {};

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];

    const compliment = target - number;
    if (object.hasOwnProperty(compliment)) {
      return [object[compliment], index];
    } else {
      object[number] = index;
    }
  }
  console.log("first,o", object);
}

const numbersArray = [2, 7, 11, 15];
const target = 18;

console.log(twoSum(numbersArray, target));
