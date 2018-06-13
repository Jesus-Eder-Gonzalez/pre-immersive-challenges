module.exports = function reverseMessage(str) {
  var process = str.toLowerCase();
  process = process.split("").reverse().join("").split(" ");
  process = process.map(x => x.charAt(0).toUpperCase().concat(x.substring(1, x.length))).join(" ");
  return process;
}