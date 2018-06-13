module.exports = function needleInHaystack(haystack) {
  if(haystack.filter(x => x === "needle").length > 0) {
    return haystack.indexOf("needle",0);
  }
  else {
    return false;
  }
}