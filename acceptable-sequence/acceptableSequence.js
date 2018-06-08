module.exports = function acceptableSequence(str) {
  if (str.length > 0) {
    var letters =  str.match(/[A-z]/gi);
    var exact = str.match(/\+[A-Z]\+/gi);

    if (exact !== null) {
      //console.log(exact + " " + letters);
      if (exact.length === letters.length) {
        return true;
      }
      else {
        return false;
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