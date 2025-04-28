function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      // ?? wile loop work on left shift and assigning new value during while loop with currentj value
      // ?? sort of creating a duplicate value on thta index and once loop completed j gets updated
      // ?? and that j is now updated and j+1 assigns that current value to update the duplicate value where it actually belonged

      arr[j + 1] = arr[j]; // 2 --> 5 //
      j--;
    }
    arr[j + 1] = current;

    // console.log("current---->>>>", current);
    // console.log("J AFTER", j);
    // console.log("ARRAY", arr);
    // console.log("-------------------ITTERATION CHANGE------------------");
  }

  console.log(arr);
}

insertionSort([5, 2, 4, 6, 1, 3]);
