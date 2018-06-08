module.exports = function doubleStrChars(str) {
  var newStr = "";
  if (typeof str !== "string"){
    return "not a string!";
  }
  
  else {
    for (i = 0; i < str.length; i++){
      newStr = newStr.concat(str[i]+str[i]);
    }

    return newStr;
  }
}