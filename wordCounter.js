const text = "Hello my name name name is Maaz";
// const text =
//   "If you want, I can walk through this in memory/stack model too. Would that help?";

function countWord() {
  const wordCountResult = {};

  text.split(" ").forEach((item) => {
    if (wordCountResult[item]) {
      wordCountResult[item]++;
    } else {
      wordCountResult[item] = 1;
    }
  });

  return wordCountResult;
}

console.log(countWord(text));
