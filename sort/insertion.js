/*
插入排序：
将一个记录插入到已经排序好的有序表中，从而得到一个新的、记录数增1的有序表
最好情况： 记录本身有序，没有移动记录，O(n)
最坏情况： 记录逆序，O(n^2)

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