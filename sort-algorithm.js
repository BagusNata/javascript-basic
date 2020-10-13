// ==> BELAJAR ALGORITHM <==

//1
function selectionSort() {
  // arr = array
  // A   = first index
  // B   = second index
  const swap = (arr, A, B) => {
    const temp = arr[A];
    arr[A] = arr[B];
    arr[B] = temp;
  };

  //create selection sort
  const selectionSort2 = () => {
    const arr = [1, 4, 6, 2, 3, 5];

    for (let i = 0; i < arr.length; i++) {
      let min = i; //i dijadikan patokan                    // i = current index || j = index yang di test
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          //kalo j kecilan dari min, j dijadikan patokan
          min = j;
        }
      }
      swap(arr, i, min);
    }
    return arr;
  };
  console.log(
    "SelectionSort : harusnya jadi [1,2,,3,4,5,6] -->",
    selectionSort2()
  );
}
// selectionSort();

//2
// index 0 dianggap sorted

// tahap-tahap :
// 1. cari yang termasuk unsorted list.
// 2. cek ke index sebelummya apakah ada nilai yg lebih kecil?
// 3. kalau ada tukar ke posisi
function insertionSort() {
  const insertionSort = () => {
    const array = [2, 3, 1, 6, 4, 5];

    for (let i = 1; i < array.length; i++) {
      value = array[i];
      hole = i;
      while (hole > 0 && array[hole - 1] > value) {
        array[hole] = array[hole - 1]; // pindah ke kanan
        hole = hole - 1; // lubangnya pindah ke kiri
      }
      array[hole] = value; // nilai dimasukin ke lubang
    }
    return array;
  };
  console.log(
    "InsertionSort : harusnya jadi [1,2,3,4,5,6] --> ",
    insertionSort()
  );
}
// insertionSort();

//3
function bubbleSort() {
  const bubbleSort = () => {
    const array = [2, 3, 1, 6, 4, 5];

    for (let i = 1; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  };
  console.log("BubbleSort : harusnya jadi [1,2,3,4,5,6] --> ", bubbleSort());
}
// bubbleSort();

// 4
function mergeSort() {

  const mergeSort = (array) => {
    //Check if array can be split
    if (array.length < 2) return array;
    //Get Middle index
    const middle = Math.floor(array.length / 2);
    //Split Array In Two Sides
    const leftSide = array.slice(0, middle);
    const rightSide = array.slice(middle, array.length);
    //Use recusion to continue splitting
    console.log("split:", leftSide, rightSide);
    return merge(mergeSort(leftSide), mergeSort(rightSide));
  };

  const merge = (left, right) => {
    //Create New Array
    const result = [];
    //Check if left array and right array is empty
    while (left.length && right.length) {
      //Find lower value
      if (left[0] <= right[0]) {
        //Add left value
        result.push(left.shift());
      } else {
        //Add right value
        result.push(right.shift());
      }
    }
    //Merge left array
    while (left.length) result.push(left.shift());
    //Merge right array
    while (right.length) result.push(right.shift());
    //return result array
    console.log("result:", result);
    return result;
  };
  console.log(mergeSort([5, 3, 7, 10, 4, 1, 5, 9]));

}
// mergeSort();


// 5
function quickSort() {

  quickSort = (array,low,high) => {
    if (low < high) {
      const pi = partition(array,low,high);

      quickSort(array,low,pi - 1);
      quickSort(array,pi + 1, high)
    }
  }

}
