/**
将所有待比较数值(注意,必须是正整数)统一为同样的数位长度,
数位较短的数前面补零.
然后, 从最低位开始, 依次进行一次稳定排序
这样从最低位排序一直到最高位排序完成以后, 数列就变成一个有序序列.
**/

function radixSort(array) {
    var bucket = [],
        l = array.length,
        loop,
        str,
        i,
        j,
        k,
        t,
        max = array[0];

    for (i = 1; i < l; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }

    loop = (max + '').length;

    for (i = 0; i < 10; i++) {
        bucket[i] = [];
    }

    for (i = 0; i < loop; i++) {
        for (j = 0; j < l; j++) {
            str = array[j] + '';
            if (str.length >= i + 1) {
                k = parseInt(str[str.length - i - 1]);
                bucket[k].push(array[j]);
            } else { // 高位为 0
                bucket[0].push(array[j]);
            }
        }

        array.splice(0, l);
        for (j = 0; j < 10; j++) {
            t = bucket[j].length;
            for (k = 0; k < t; k++) {
                array.push(bucket[j][k]);
            }
            bucket[j] = [];
        }
    }
    return array;
}