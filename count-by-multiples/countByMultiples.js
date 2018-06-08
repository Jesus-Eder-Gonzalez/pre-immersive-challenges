module.exports = function countByMultiples(length, x) {
  var multiples = [];
  console.log(length + " " + x);
  for (i = x; i <= length*x; i = i+x){
    multiples.push(i);
    //console.log(i);
  }
  return multiples;
}