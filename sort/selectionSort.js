/*
通过n-i次关键字的比较，从n-i+1个记录中选出关键字最小的记录，并和第i个记录交换
特点：移动数据次数较少
无论最好最差情况，比较次数都是一样多，第i趟排序需要n—i次关键字的比较，需要
n-1+n-2+...+1=n*(n-1)/2

对于交换次数：最好：0次
              最差：初始降序 n-1次

最终时间：比较与交换的次数和，时间复杂度O(n^2);
*/

function selectionSort(array) {
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        var len = array.length, temp;
        for (var i = 0; i < len - 1; i++) {
            var min = i;
            for (var j = i + 1; j < len; j++) {
                if (array[j] < array[min]) {
                    min=j;
                    
                }
            }

            if(min!=i){
                temp = array[min];
                array[min] = array[i];
                array[i] = temp;
            }
        }
        return array;
    } else {
        return 'array is not an Array!';
    }
}