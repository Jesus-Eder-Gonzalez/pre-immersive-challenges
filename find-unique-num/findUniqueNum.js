module.exports = function findUniqueNum(strOfNums) {
  var even;
  var odd;
  var eCount = 0;
  var tempArray = strOfNums.split(" ");
  for(i = 0; i < tempArray.length; i++){
    //console.log(tempArray[i] + " " + tempArray[i]%2);
    if(tempArray[i]%2 === 0) {
      //console.log("index "+i + " even");
      even = i;
      eCount += 1;
    }
    else {
      odd = i;
    }
  }
  if (eCount > 1) {
    return odd;
  } else {
    return even;
  }
}