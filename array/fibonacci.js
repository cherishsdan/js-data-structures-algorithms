var fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 2;

for (var i = 2; i < 20; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

for(var i = 0, length1 = fibonacci.length; i < length1; i++){
    console.log(fibonacci[i]);
}