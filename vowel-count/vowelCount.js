module.exports = function vowelCount(str) {
  var vowels = str.match(/[aeiou]/);
  if (vowels !== null){
    return str.match(/[aeiou]/gi).length;
  } else {
    return 0;
  }
  
}