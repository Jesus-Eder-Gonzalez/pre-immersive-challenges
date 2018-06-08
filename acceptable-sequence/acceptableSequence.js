module.exports = function acceptableSequence(str) {
  if (str.length > 0) {
    var letters =  str.match(/[A-z]/gi);
    var exact = str.match(/\+[A-Z]\+/gi);

    if (exact != undefined) {
      if (exact.length == letters.length) {
        return true;
      }
      else {
        var edger = str.substring(0,2).match(/[A-Z]\+/gi);
        var edgel = str.substring(str.length-2,str.length).match(/\+[A-Z]/gi);
        var edge = 0;

        if (edger != undefined) {
          edge = edge + 1;
        }

        if (edgel != undefined) {
          edge = edge + 1;
        }

        if ((letters.length + edge) == exact.length){
          return true;
        }
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}