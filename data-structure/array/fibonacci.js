/* 
* Fibonacci series
*/

var fibonacci = [];

fibonacci[0] = 1;
fibonacci[1] = 2;

for (var i = 2; i < 20; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}


// output test
for(var i = 0, length = fibonacci.length; i < length; i++){
    console.log(fibonacci[i] + '');
}