module.exports = function findMiddleValue(numArray) {
  var index;
  var tempArray = numArray.slice();
  var middle = tempArray.sort((a,b) => a - b)[1];
  //console.log(middle);
  index = numArray.indexOf(middle);
  return index;
}