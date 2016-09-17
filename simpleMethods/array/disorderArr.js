function disOrder(a) {
  var length = a.length;
  var shuffled = Array(length);
  console.log(shuffled);
 
  for (var index = 0, rand; index < length; index++) {
    rand = Math.floor(Math.random() * (index + 1));//~~也可以
    console.log(rand);
    if (rand !== index) 
      shuffled[index] = shuffled[rand];
    shuffled[rand] = a[index];
  }
 
  return shuffled;
}