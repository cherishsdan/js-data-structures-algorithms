function insertSort (arr) {
     // body...  

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