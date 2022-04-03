
let getRandomNumber = function(start, end){
  let getRandom = Math.floor(Math.random()*(end-start+1)) + start;
  return getRandom;
}

var count = 0;
var smallest;
var largest;
var rand;

function checkIfSquareNum(num){
  var count = 0;
  for(var i=0;(i*i)<=num;i++){
    if(i*i == num){
      count++;
      break;
    }
  }
  if(count == 0){
    return false;
  }else{
    return true;
  }
}

document.getElementById("start").onclick = function(){
  smallest = Math.floor(document.getElementById("smallest").value);
  largest = Math.floor(document.getElementById("largest").value);
  rand = getRandomNumber(smallest,largest);
  document.getElementById("display1").innerHTML = rand;
}



document.getElementById("yes").onclick = function(){
  if(checkIfSquareNum(rand)){
    count++;
    document.getElementById("result").innerHTML = "Correct! Cumulative score = " + count;;
  }else{
    count = 0;
    alert("Incorrect!");
    document.getElementById("result").innerHTML = "Incorrect! Cumulative score = " + count;
  }
  rand = getRandomNumber(smallest,largest);
  document.getElementById("display1").innerHTML = rand;
}

document.getElementById("no").onclick = function(){
  if(checkIfSquareNum(rand)){
    count = 0;
    alert("Incorrect!");
    document.getElementById("result").innerHTML = "Incorrect! Cumulative score = " + count;
  }else{
    count++;
    document.getElementById("result").innerHTML = "Correct! Cumulative score = " + count;;
  }
  rand = getRandomNumber(smallest,largest);
  document.getElementById("display1").innerHTML = rand;
}
