/*
1. 先从数列中取出一个数作为基准数。
2．分区过程，将比这个数大的数全放到它的右边，小于或等于它的数全放到它的左边。
3．再对左右区间重复第二步，直到各区间只有一个数。

快速排序的时间性能取决于快速排序递归的深度，
最优情况下，每次都划分的很均匀，如果排序n个关键字其递归树的深度为[log2n]+1,即仅需递归log2n次，需要时间为T(n)
第一次应该要对数组整体扫描一遍，n次比较
一分为二，各自还需T(n/2)

即T(n)<= 2T(n/2)+n T(1)=0
T(n)<=2(2T(n/4)+n/2)+n = 4T(n/4)+2n
...
T(n)<=nT(1)+(log2n)*n=O(nlogn)


最坏情况下，待排序的数列为正序或逆序，每次划分只得到一个比上一次划分少一个记录的子序列，此时递归树为一颗斜树
需要n-1次递归调用,且第i次划分需要经过n-i次关键字比较，因此比较次数：
n-1+n-2+...+1=n*(n-1)/2 即O(n^2)

就空间复杂度而言，主要是递归造成的栈空间的使用
最好：递归树深度 log2n O(logn)
最坏: n-1次递归调用，空间复杂度为O(n)
*/


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

  swap(arr, center, right);
  return arr[right];
}



function qSort (arr, left, right) {
  // 枢纽元
  var index = median3(arr, left, right);

  console.log(arr);
  var small = left-1;

  for(index=left;index<right;++index){
    if(arr[index] < arr[right]){
      ++small;
      if(small != index){
        swap(arr,index,small);
      }
    }
  }
  ++small;//small 指向第一个比arr[right]大的数
  swap(arr,small,right);
  if (left < small) {
    qSort(arr, left, small - 1);
  }
  if (small < right) {
    qSort(arr, small + 1, right);
  }

  return arr;
}

function quickSort (arr) {
  return qSort(arr, 0, arr.length - 1);
}

