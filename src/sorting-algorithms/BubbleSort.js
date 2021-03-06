import swap from "../utils/swap";

const BubbleSort = (array, isAsc) => {
  const tmpArr = array.slice();
  const order = [];
  // index1, index2, array, sorted index

  let i, j;

  for (i = 0; i < tmpArr.length; i++) {
    // length decrease by 1 because j is compared to j + 1
    // after each iteration, the greatest value of the array becomes the last index of the array so decrease length by i (i = sorted items)
    for (j = 0; j < tmpArr.length - i - 1; j++) {
      order.push([j, j + 1, null, null]); // compare
      //if isAsc then compare j > j + 1 (ascending) else j < j + 1 (descending)
      if (tmpArr[isAsc ? j : j + 1] > tmpArr[isAsc ? j + 1 : j]) {
        swap(tmpArr, j, j + 1);

        order.push([j, j + 1, tmpArr.slice(), null]); //swap
      }
    }
    order.push([null, null, null, j]); // get the j index (sorted index position)
  }

  return order;
};

export default BubbleSort;
