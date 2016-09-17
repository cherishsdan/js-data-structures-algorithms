/*
* 设置一个定量的数组当作空桶；
* 遍历输入数据，并且把数据一个一个放到对应的桶里去；
* 对每个不是空的桶进行排序；
* 从不是空的桶里把排好序的数据拼接起来。
* @array 将要排序的数组
*
* @step 划分桶的步长，比如 step = 5，表示每个桶存放的数字的范围是 5，像 -4~1、0~5、6~11
* 桶排序最好情况下使用线性时间O(n)，桶排序的时间复杂度，取决与对各个桶之间数据进行排序的时间复杂度，因为其它部分的时间复杂度都为O(n)。很显然，桶划分的越小，
* 各个桶之间的数据越少，排序所用的时间也会越少。但相应的空间消耗就会增大。
最快：当输入的数据可以均匀的分配到每一个桶中
最慢：当输入的数据被分配到了同一个桶中

M个桶，共n个数
如果数据是平均分布的，则每个桶中的元素平均个数为N/M。如果对每个桶中的元素排序使用的算法是快速排序，
每次排序的时间复杂度为O(N/Mlog(N/M))。
则总的时间复杂度为O(N)+O(M)O(N/Mlog(N/M)) = O(N+ Nlog(N/M)) = O(N + NlogN - NlogM)。
当M接近于N是，桶排序的时间复杂度就可以近似认为是O(N)的。就是桶越多，时间效率就越高，
而桶越多，空间却就越大，由此可见时间和空间是一个矛盾的两个方面。

稳定、线性
*/

function insertSort (arr) {
     var len = arr.length;

     if (len<=1) {
        return arr;
     }

     for (var i =1; i <len; i++) {

            var item=arr[i];
            for(var j=i; j > 0&&arr[j-1]>item;j--){
                arr[j]=arr[j-1];
            }
            arr[j]=item;
       }

       return arr;
}

function bucketSort(arr, bucketSize) {
    if (arr.length === 0) {
      return arr;
    }

    var i;
    var minValue = arr[0];
    var maxValue = arr[0];
    for (i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
          minValue = arr[i];                //输入数据的最小值
      } else if (arr[i] > maxValue) {
          maxValue = arr[i];                //输入数据的最大值
      }
    }
    console.log(minValue);
    console.log(maxValue);
    //桶的初始化
    var DEFAULT_BUCKET_SIZE = 5;            //设置桶的默认数量为5
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    console.log(bucketCount);
    var buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    //利用映射函数将数据分配到各个桶中
    for (i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }

    arr.length = 0;
    for (i = 0; i < buckets.length; i++) {

        console.log(buckets[i]);
        quickSort(buckets[i]);                      //对每个桶进行排序，这里使用了插入排序
        for (var j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);                      
        }
    }

    return arr;
}


var arr = [0,2,5,6,8,1,2,7,20,12,45,11,32];
arr = bucketSort(arr,5);
console.log(arr);