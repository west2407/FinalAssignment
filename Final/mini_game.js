
var p1 = prompt("Lets play Rock Paper Scissors. (type rock, paper or scissors) 1.. 2.. 3!");

while (p1 !== "quit") {

  var values = ["rock","paper","scissors"];
  var p2 = values[Math.floor(Math.random() * values.length)];
  var res = p1.toLowerCase();
  var play = res + p2;
  console.log(play)

  if (play  === 'rockscissors') {
    alert("Scissors");
    alert("Player 2 plays Scissors - You win!");
  }
  else if (play  === "rockpaper") {
    alert("Paper");
    alert("Player 2 plays Paper - You lose!");
  }
  else if (play  === "scissorsrock") {
    alert("Rock");
    alert("Player 2 plays Rock - You lose!");
  }
  else if (play  === "scissorspaper") {
    alert("Paper");
    alert("Player 2 plays Paper - You win!");
  }
  else if (play  === "paperscissors") {
    alert("Scissors");
    alert("Player 2 plays Scissors - You lose!");
  }
  else if (play  === "paperrock") {
    alert("Rock");
    alert("Player 2 plays Rock - You win!");
  }
  else if (p1  !== "paper", "rock", "scissors") {
    alert("Error incorrect - please type rock, paper or scissors");
  }
  else {
    alert("Draw - Play again!")

  }
  var p1 = prompt("Go - 1.. 2.. 3!");



}
