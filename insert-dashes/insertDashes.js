module.exports = function insertDashes(num) {
  var str = num.toString();
  if (str.match(/[02468]/g) !== null){
    var firstRun = str.replace(/[02468][02468]/g,x => x.charAt(0)+"-" +x.charAt(1));
    return firstRun.replace(/[02468][02468]/g,x => x.charAt(0)+"-" +x.charAt(1));
  }
  else {
    return str;
  }
}