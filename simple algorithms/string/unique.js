/***
* 数组去重相关方法总结
***/


/*兼容性写法*/
    function unique(arr){
        var result=[];
        
        for(var i=0,ilen=arr.length;i<ilen;i++){
            var item=arr[i];
            for(var j=0,jlen=arr.length;j<jlen;j++){
                if(item == arr[j]){
                    break;
                }
            }
            
            if(jlen==j）{
                    result.push(item);
                }
        }
        
        return result;
    }


/* 不考虑兼容 */
    function unique(arr){
        var result={};
        
        for(var i=0,ilen=arr.length;i<ilen;i++){
            var item = arr[i];
            
            (result.indexOf(item)===-1)&&result.push(item);
        }
        
        return result;
    }
    
    function unique(arr){
        var result=arr.filter(function(item,index,array){
            return array.indexOf(item) === index;
        });
        
        return result;
    }
    
    /*** 面试官问我indexOf在数组中可以直接用吗，我当时想indexOf不就是array自带
        的方法吗，后来才想到面试官可能想说的是indexOf的兼容性，还有面试官说indexOf最早是string上的方法
    ***/
    

/* sort() */

    function unique(arr) {
        return arr.sort().filter(function(item, index, array) {
            return !index || item != array[index - 1];
    });

/* Object做hash */

    function unique(a) {
        var obj = {};

        return a.filter(function(item) {
                return obj.hasOwnProperty(item) ? false : (obj[item] = true);
        });
    }

/* ES6 */

    function unique(arr) {
            return Array.from(new Set(arr));
    }
