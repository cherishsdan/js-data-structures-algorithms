/***
*将需要排序的数组A[0...n-1]一分为二，A[0...Math.floor(n/2)-1]和A[Math.floor(n - 1)...n-1]，
*并对每个子数组递归排序，然后将这两个排好序的子数组合并为一个有序数组

时间复杂度：O(nlogn)

空间复杂度：O(n+logn)
稳定
***/
function merge(left,right){
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;

    while(leftIndex<left.length && rightIndex<right.length){
        if (left[leftIndex]<right[rightIndex]) {
            result.push(left[leftIndex++]);
        }else{
            result.push(right[rightIndex++]);
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
function mergeSort(arr){
    var len = arr.length;

    if (len<=1) {
        return arr;
    }

    var middle = Math.floor(len/2);
    var left = arr.slice(0,middle);
    var right = arr.slice(middle);

    return merge(mergeSort(left),mergeSort(right));
}