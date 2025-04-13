const isValidParenthesis = (str) => {
  const stack = [];
  const pairs = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let char of str) {
    console.log("------current-------", char);
    // console.log("pairs[char]", pairs[char]);
    if (pairs[char]) {
      //   console.log("IF");
      stack.push(char);
    } else {
      console.log("stack", stack);
      const lastElementOfStack = stack.pop();
      console.log("lastElementOfStack", lastElementOfStack);
      if (!lastElementOfStack || pairs[lastElementOfStack] !== char) {
        // ?? !lastElementOfStack check for case when there are only closing brackets in input but no brackets found so
        // ?? stack is empty meaning closing bracket was either found(wrong pattern) first or only closing brackets ere there but no opening brackets leading to invalid brackets
        // ?? meaning stack was empty so its not a valid parenthesis returning false
        // ?? pairs[lastElementOfStack] !== char check for the last element of stack meaning it will take last element of stack key find relevant value for its in pairs object
        // ?? and then match it with current element if it matches with that of pairs value then its a valid parenthesis otherwise its not returning false
        // ?? stack.length === 0  checks for case that only if opening brackets were given but no closing brackets meaning stack has length so it returns false
        // ?? otherwise if stack didn't have a length then it means every pair is valid opened and closed and pattern has matched
      }
    }
  }

  return stack.length === 0;
};

// console.log(isValidParenthesis("{}[]()"));
// console.log(isValidParenthesis("{]()"));
// isValidParenthesis("{}");
// console.log(isValidParenthesis("("));
// console.log(isValidParenthesis(")"));

function reverseString(str) {
  const stack = [];
  for (let char of str) {
    stack.push(char);
  }

  let reverseString = "";

  while (stack.length > 0) {
    reverseString += stack.pop();
  }

  console.log("reverseString", reverseString);
  console.log("stack", stack);
}

reverseString("Maazy");
