a = 3;
b = 4;
c = "hi";
d = "bye";

var states = [['Montana', 'Seatle', 'Arizona', 'Arkansas', 'California'], ['Montgomery', 'Juneau', 'Phoenix', 'Little Rock', 'Sacramento']];

function compNums(){
  num1 = document.getElementById('num1').value;
  if(parseInt(num1) < 100){
    alert("Less than 100!");
  }else{
    alert(parseInt(num1)+" is greater than 100!");
  }
}

function compStrings(){
  word1 = document.getElementById('word1').value;
  word2 = document.getElementById('word2').value;
  if(word1 == word2){
    alert("They are identical!");
  }else{
    alert("They are not the same!");
  }
}

function nameIn(name){
 alert(name);
}

function printsToConsole(){
  console.log("Hello There.");
}

function doors(clicked_id){
  if(clicked_id=="door1")
    alert("You won the Lottery!");
  else if (clicked_id=="door2")
    alert("You won nothing!");
  else
    alert("You won a bike!");
}
