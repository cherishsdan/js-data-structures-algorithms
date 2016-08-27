/*var readline = require('readline').createInterface(process.stdin,process.stdout);
readline.on('line',function(data){
    var result = data.trim();
    var result=result.split('').reverse().filter(function(item,index,array){
            return array.indexOf(item) === index;
        });
    
    console.log(+result.join(''));
})*/

/***
*将需要排序的数组A[0...n-1]一分为二，A[0...Math.floor(n/2)-1]和A[Math.floor(n - 1)...n-1]，
*并对每个子数组递归排序，然后将这两个排好序的子数组合并为一个有序数组
***/
function merge(left,right){
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;
    var str = '';

    //去掉数组中重复的字符
    var left=left.filter(function(item,index,array){
            return array.indexOf(item) === index;
        });

    while(leftIndex<left.length)
    {
        while(rightIndex<right.length){
            str = left[leftIndex]+right[rightIndex];
            result.push(str);
            rightIndex++;
        }
        leftIndex++;
    }

    return result;
}
function mergeElements(arr){
    var len = arr.length;

    if (len<=1) {
        return arr;
    }

    var middle = Math.floor(len/2);
    var left = arr.slice(0,middle);
    var right = arr.slice(middle);

    return merge(mergeElements(left),mergeElements(right));
}