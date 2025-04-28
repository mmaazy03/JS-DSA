function BubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    console.log(arr[i]);
    for (let j = 0; j < i; j++) {
      console.log(arr[j]);

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        console.log("TEMP", temp);
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("arr", arr);
  return arr;
}

BubbleSort([4, 2, 6, 5, 1, 3]);
