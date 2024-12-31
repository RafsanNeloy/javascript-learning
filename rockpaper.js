let userScore = 0;
let compScore =0;

 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 const userScr = document.querySelector("#user-score");
 const compScr = document.querySelector("#comp-score");
 const reset = document.querySelector("#reset");

 const resetGame = ()=>{
userScore=0;
compScore=0;
userScr.innerText=userScore;
compScr.innerText=compScore;
msg.innerText="Play your move";
console.log("reset clicked");
 };
 reset.addEventListener("click",resetGame);

const genCompChoice = () =>{
    let options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random() * 3); //index should be 0-2
    return options[randIdx];
;}
const showWinner = (userWin,userChoice,compChoice)=>{
 if (userWin){
    userScore++;
    userScr.innerText=userScore;
    console.log("YOU WIN!");
msg.innerText=`YOU WIN!!! your ${userChoice} beats ${compChoice}`;
msg.style.backgroundColor = "green";
 }
 else{
    compScore++;
    console.log("YOU LOSE");
    msg.innerText=`YOU LOOSE ---${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScr.innerText = compScore;
};
};
const drawGame = ()=>{
    console.log("game draw");
    msg.innerText = "DRAAWW--PLAY AGAIN";
    msg.style.backgroundColor = "#081b31";
};

 const playGame = (userChoice) =>{
console.log("user choice =",userChoice);
const compChoice = genCompChoice();
console.log("com choice = ",compChoice);

if (userChoice===compChoice){
    drawGame();
} else {
 let userWin= true;
 if(userChoice==="rock")
    {
        userWin= compChoice==="paper"? false:true;
    }
    else if (userChoice==="paper")
        {
        userWin = compChoice==="scissors"? false:true
        }
    else {
userWin = compChoice==="rock"? false :true;
    }    
showWinner(userWin,userChoice,compChoice);
}

 };

choices.forEach((choice)=>{
    console.log(choice);
    let userChoice = choice.getAttribute("id");
    choice.addEventListener("click",()=>{
console.log("clicked",userChoice);
playGame(userChoice);
    });
});