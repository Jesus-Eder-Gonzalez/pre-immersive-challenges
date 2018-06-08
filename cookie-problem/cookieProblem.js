module.exports = function cookieProblem(array) {
  var max = 0;
  var cookies = 0;
  for (i = 0; i < array.length; i++){
    if (array[i] > max){
      max = array[i];
      // console.log(max);
    }
  }
  // console.log("cookies");
  for (i = 0; i <array.length; i++){
    if (array[i] !== max) {
      cookies = cookies + (max-array[i]);
      // console.log(cookies);
    }
  }
  return cookies;
}