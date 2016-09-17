/***
计数排序
核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。
作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。
扫描序列A，以A中的每个元素的值为索引，把出现的个数填入C中。此时C[i]可以表示A中值为i的元素的个数。
对于C从头开始累加，使C[i]<-C[i]+C[i-1]。这样，C[i]就表示A中值不大于i的元素的个数。
按照统计出的值，输出结果。
计数排序的时间复杂度为O(N+K)，空间复杂度为O(N+K)。
当K不是很大时，这是一个很有效的线性排序算法。更重要的是，它是一种稳定排序算法
***/


function countSort(arr, maxValue) {
    var bucket = new Array(maxValue+1),
        sortedIndex = 0;
        arrLen = arr.length,
        bucketLen = maxValue + 1;

    for (var i = 0; i < arrLen; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }

    for (var j = 0; j < bucketLen; j++) {
        while(bucket[j] > 0) {
            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }

    return arr;
}