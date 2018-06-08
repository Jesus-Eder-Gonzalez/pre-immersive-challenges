module.exports = function findTheLongestWord(sen) {
  var longestWord = sen.sort((a,b) => {
    return a.length < b.length;
  });
  return longestWord[0];
}