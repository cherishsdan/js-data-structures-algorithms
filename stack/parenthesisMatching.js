function parenthesisMatch(string){
    let stack = new Stack(),
        balanced = true,
        index = 0,
        symbol,
        top,
        opens = "([{",
        closers = ")]}";

    while(index < string.length && balanced){
        symbol = string.charAt(index);
        if (opens.indexOf(symbol) >= 0) {
            stack.push(symbol);
        }else {
            if (stack.isEmpty()) {
                console.log('stack is empty');
            }else{
                top = stack.pop();
                if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
                    balanced = false;
                }else {
                    console.log('poping symbol ' + top + 'is a match compared to ' + symbol);
                }
            }
        }
        index++;
    }
    if (balanced && stack.isEmpty()){
            return true;
        }
    return false;
}
console.log(parenthesisMatch('{{([][])}()}'));