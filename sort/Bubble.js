/*
冒泡排序：
交换排序，两两比较相邻记录的关键字，如果反序则交换，知道没有反序的记录为止
时间复杂度：
最好：排序的表本身有序，n-1次的比较，O(n)
最坏：比较1+2+3+...+(n-1)=n*(n-1)/2,并做同等数量的移动，O(n^2);
*/


function bubbleSort(array) {
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    var length = array.length;
    var flag = true;
    for(var i=0; i<length-1 && flag; i++) {
        flag = false;
        for(var j=length-1; j>=i; j--) {
            if(array[j] < array[j-1]) {
                temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;

                flag = true;
            }
        }
    }else {
        return 'array is not an Array!';
    }
}
