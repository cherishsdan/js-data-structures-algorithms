function shellSort (arr) {
     // 缩小增量排序将整个待排元素序列分割成若干个子序列（由相隔某个“增量”的元素组成的）分别进行直接插入排序，
     //然后依次缩减增量再进行排序，待整个序列中的元素基本有序（增量足够小）时，再对全体元素进行一次直接插入排序。
     var len = arr.length;

     if (arr<=1) {
        return arr;
     }

     for(var increment=Math.floor(len/2);increment>0;increment=Math.floor(increment/2)){
        for(var i=increment;i<len;i++){
            var item=arr[i]
            for(var j=i;j>=increment;j-=increment){
                if (arr[j]<arr[j-increment]) {
                    arr[j]=arr[j-increment];
                }else {
                    break;
                }
            }

            arr[j]=item;
        }
     }

     return arr;
}
