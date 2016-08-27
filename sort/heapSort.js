function adjustHeap(arr,p,len){
    var curParent = arr[p];
    var child=2*p +1;

    while(child<len){
        if (child+1<len && arr[child]<arr[child+1]) {
            child++;
        }
        if(curParent<arr[child]){
            arr[p]=arr[child];
            child=p;
            child=2*p+1;
        }else {
            break;
        }

        arr[p]=curParent;
    }
}


function heapSort(arr){
    var len = arr.length;

    for(var i=len/2-1;i>=0;i--){
        adjustHeap(arr,i,len);
    }
    for(var i=len-1;i>=0;i--){
        var maxEle = arr[0];
        arr[0]=arr[i];
        arr[i]=maxEle;

        adjustHeap(arr,0,i);
    }

    return arr;
}

var arr=heapSort([1,3,2,4,6,5]);
console.log(arr);