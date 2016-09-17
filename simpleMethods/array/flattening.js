/***
* 数组扁平化
***/

/* 1. 普通的递归*/
var res = [];
function flat(arr) {
  arr.forEach(function(item){
    if (item.instanceof(Array)) {
      flat(item);
    }else {
      res.push(item);
    }
  });
}

/* 2. 使用reduce*/
var res = arr.reduce(function flat(prev,cur){
  if(cur instanceof Array){
    cur.reduce(flat, prev);
  }else{
    prev.push(cur);
  }
  return prev;
}, []);


/* 3. ES6 循环写法*/
while (arr.some(item => item instanceof Array))
  arr = [].concat(...arr);

// 更多：https://www.web-tinker.com/article/21247.html
