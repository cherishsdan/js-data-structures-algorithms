function bubbleSort(array) {
    var length = array.length;
    for(var i=0; i<=length-2; i++) {
        for(var j=length-1; j>=1; j--) {
            if(array[j] < array[j-1]) {
                temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            }
        }
    }
}
