/*
1. 先从数列中取出一个数作为基准数。
2．分区过程，将比这个数大的数全放到它的右边，小于或等于它的数全放到它的左边。
3．再对左右区间重复第二步，直到各区间只有一个数。

挖坑填数+分治法
*/

function quickSort(arr,l,r){

    if(l<r){
        var i = l,j=r,temp = arr[l];

        while(i<j){
            while(i<j && s[j--] >= temp){}
            if(i<j){
                arr[i++]=arr[j];
            }

            while(i<j && arr[i++]<temp){}
            if (i<j) {
                arr[i--]=arr[i];
            }

            arr[i] = temp;
            quickSort(arr,l,i-1);
            quickSort(arr,i+1,r);
        }
    }
}



function swap (arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

/***
三平均分区法
选用待排数组最左边、最右边和最中间的三个元素的中间值作为中轴
***/
function median3 (arr, left, right) {
  var center = Math.floor((left + right) / 2);

  if (arr[left] > arr[center]) {
    swap(arr, left, center);
  }
  if (arr[left] > arr[right]) {
    swap(arr, left, right);
  }
  if (arr[center] > arr[right]) {
    swap(arr, center, right);
  }

  swap(arr, center, right - 1);
  return arr[right - 1];
}



function qSort (arr, left, right) {
  // 枢纽元
  var pivot = median3(arr, left, right);
  var i = left;
  var j = right - 1;

  while (i < j) {
    while (arr[++i] < pivot) {}
    while (arr[--j] > pivot) {}
    if (i < j) {
      swap(arr, i, j);
    } else {
      break;
    }
  }
  swap(arr, i, right - 1);
  if (left < i - 1) {
    qSort(arr, left, i - 1);
  }
  if (i + 1 < right) {
    qSort(arr, i + 1, right);
  }

  return arr;
}

function quickSort (arr) {
  return qSort(arr, 0, arr.length - 1);
}


var arr = [21, 53, 643, 654, 24, 892, 5338];
console.log(quickSort(arr));