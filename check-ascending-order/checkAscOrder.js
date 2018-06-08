module.exports = function checkAscOrder(numArray) {
//  var length = numArray.length;
//  tempArray = numArray.slice(1,length);
//  console.log(tempArray);
//  for (i = 0; i < length-1; i++) {
//   console.log(numArray[i]);
//   if (tempArray.every(x => x < numArray[i])){
//     return false;
//   }
//   tempArray = numArray.slice(i+1,length);
//   console.log(tempArray);
//  }
//  return true;
var length = numArray.length;
for (i = 0; i < length - 1; i++) {
  if(numArray[i]>numArray[i+1]){
    return false;
  }
}
return true;
}