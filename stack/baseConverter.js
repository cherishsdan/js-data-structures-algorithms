function baseConverter(decNumber,base){
    var remStack = new Stack(),
        rem,
        baseString = '',
        digit = '0123456789ABCDEF';

        while(decNumber > 0){
            rem = Math.floor(decNumber % base);
            remStack.push(rem);
            decNumber = Math.floor(decNumber / base);
        }

        while(!remStack.isEmpty()){
            baseString += digit[remStack.pop()];
        }

        return baseString;
}
console.log(baseConverter(122,16));