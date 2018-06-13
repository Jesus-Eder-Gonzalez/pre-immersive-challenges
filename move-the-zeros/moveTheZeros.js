module.exports = function moveTheZeros(arrNum, isRight) {
  //console.log(arrNum, isRight);
  var tempArr;
  if(arrNum !== null){
    if(isRight === true){
      tempArr = arrNum.filter(x => x !== 0);
      tempArr = tempArr.concat(arrNum.filter(x => x === 0));
    }
    else {
      tempArr = arrNum.filter(x => x === 0);
      tempArr = tempArr.concat(arrNum.filter(x => x !== 0));
    }
  }
  return tempArr;
}