module.exports = function evenLadderPattern(num) {
  var ladder = "";
  if (num > 1){
    if(num%2 === 0) {
      for(i=2; i <=num; i+=2){
        //console.log(i);
        for(j=0; j < i; j++){
          ladder = ladder.concat(i);
        }
        if(i+2 <= num){
          ladder = ladder.concat('\n');
        }
      }
    }
    else{

      for(i=2; i <num; i+=2){
        //console.log(i);
        for(j=0; j < i; j++){
          ladder = ladder.concat(i);
        }
        if(i+2 < num){
          ladder = ladder.concat('\n');
        }
      }
    }
    return ladder;
  }
  else {
    return "";
  }
}