module.exports = function descendingOrder(number) {
  //console.log(typeof number);
  var strNum;
  var newNum = [];
  if (typeof number !== "number"){
    return 'not a number!';
  }
  else {
    strNum = number.toString();
    //console.log(strNum);
    for (i = 0; i < strNum.length; i++){
      newNum.push(strNum[i]);
    }
    //console.log(newNum);
    newNum = newNum.sort().reverse();
    //console.log(newNum);
    strNum = "";
    for (i = 0; i < newNum.length; i++){
      strNum = strNum.concat(newNum[i]);
    }
    //console.log(strNum);
    return Number(strNum);

  }
}