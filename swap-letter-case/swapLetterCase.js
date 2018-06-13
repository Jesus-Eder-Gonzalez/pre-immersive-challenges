module.exports = function swapLetterCase(str) {
  var process = str.split("");
  function swapCase(x){
    var unicode = x.charCodeAt();
    if (65 <= unicode && unicode < 91){
      return String.fromCharCode(unicode+32);

    } else if (97 <= unicode && unicode <123){
      return String.fromCharCode(unicode-32);
    }else {
      return String.fromCharCode(unicode);
    }


  }
  return process.map(x => swapCase(x)).join("") ;
}