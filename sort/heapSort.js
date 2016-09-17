/*
堆排序：
将待排序的序列构造成一个堆，将堆顶的元素与堆数组末尾元素交换，然后将剩余的n-1个元素重新构造成一个堆
如此反复执行

时间复杂度分析：
它的运行时间主要消耗在初始构建堆和重建堆时的反复筛选中
初始建堆：
如有N个节点，那么高度为H=logN，最后一层每个父节点最多只需要下调1次，倒数第二层最多只需要下调2次，
顶点最多需要下调H次，而最后一层父节点共有2^(H-1)个,倒数第二层公有2^(H-2),顶点只有1(2^0)个，
所以总共的时间复杂度为s = 1 * 2^(H-1) + 2 * 2^(H-2) + ... + (H-1) * 2^1 + H * 2^0 
将H代入后s= 2N - 2 - log2(N)，近似的时间复杂度就是O(N)。


T(n) <=  O(n)  + (n - 1)*O(log2(n))
T(n) =O(nlog2(n))


堆排序对原始记录的顺序并不敏感，无论最好、最坏、平均时间复杂度均为O(nlog2(n))
不稳定，不适合排序序列个数较少的情况
*/


/*方法说明：堆排序
@param  array 待排序数组*/
function heapSort(array) {
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        //建堆
        var heapSize = array.length, temp;
        for (var i = Math.floor(heapSize / 2)-1; i >= 0; i--) {
            heapify(array, i, heapSize);
        }
         
        //堆排序
        for (var j = heapSize - 1; j >= 1; j--) {
            temp = array[0];
            array[0] = array[j];
            array[j] = temp;
            heapify(array, 0, --heapSize);
        }
    } else {
        return 'array is not an Array!';
    }
}
/*方法说明：维护堆的性质
@param  arr 数组
@param  x   数组下标
@param  len 堆大小*/
function heapify(arr, x, len) {
    if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && typeof x === 'number') {
        var l = 2 * x, r = 2 * x + 1, largest = x, temp;
        if (l < len && arr[l] > arr[largest]) {
            largest = l;
        }
        if (r < len && arr[r] > arr[largest]) {
            largest = r;
        }
        if (largest != x) {
            temp = arr[x];
            arr[x] = arr[largest];
            arr[largest] = temp;
            heapify(arr, largest, len);
        }
    } else {
        return 'arr is not an Array or x is not a number!';
    }
}
