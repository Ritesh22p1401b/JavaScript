//  nested if else

// winning number 19
// 19 your guess is right
// 17 too low
//  20 too high

let winning_number=19;
let userGuess= +prompt("Guess a number");
// prompt() it takes value from user typeof is string 
//  +prompt it return value in number. 
if(userGuess === winning_number){
    console.log("Your guess is Right");
}else{
    if(userGuess < winning_number){
        console.log("too low!");
    }else{
        console.log("too high!");
    }
}
