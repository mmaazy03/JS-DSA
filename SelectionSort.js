// THE PURPOSE OF THIS IS TO SEE HOW ARRAY SORT METHODS WORKS

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    let min = arr[i];
    // ?? default make minimum as the starting point of loop
    // ?? if one is found of lesser value then default,assign min value with that one
    // ?? and when upper loop iteration changes swap minium value with current iteration
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }

    // console.log("MIN---->>>>", min);
    // console.log("MIN INDEX---->>>>", minIndex);
    // console.log("ARRAY", arr);
    // console.log("-------------------ITTERATION CHANGE------------------");
  }
  //   console.log("ANSWER", arr);
}

selectionSort([10, 25, 5, 6, 4, 0]);
