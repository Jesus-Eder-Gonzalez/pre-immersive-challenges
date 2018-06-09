module.exports = function findTheStrayValue(array) {
  var length = array.length;
  for (i = 0; i < length; i++){
    if (array.filter(x => x === array[i]).length === 1){
      return array[i];
    }
  }
}