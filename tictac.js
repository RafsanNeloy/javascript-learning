let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; 

const winPattern= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const resetGame = () => {
    turnO =true;
    count =0;
enableBtn();
msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box clicked");
        if(turnO) //turno===true,player0
        {
            box.innerText="O";
            turnO=false;
        }
        else{ //playerX

            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        count++ ;
        let isWinner=checkWinner();
        if(count===9 && !isWinner)
        {
            gameDraw();
        }

    });
}
);
const gameDraw=()=>{
    msg.innerText=`Game draw`;
    msgContainer.classList.remove("hide");
    enableBtn();
}
const disableBtn = () =>{
    for(let allbox of boxes)
    {
        allbox.disabled=true;
    }
};
const enableBtn =() =>{
    for (let allbox of boxes)
    {
        allbox.disabled=false;
        allbox.innerText="";
    }
};
const showWinner = (Winner)=>{
    msg.innerText = `Congratulations! winner is ${Winner} `;
    msgContainer.classList.remove("hide");
  disableBtn();
};

const checkWinner = () =>{
    for (let pattern of winPattern) //pattern array take dhortese 
    {
        //console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val= boxes[pattern[2]].innerText;
    if(pos1Val != "" && pos2Val !="" && pos3Val !="" )
    {
        if ( pos1Val ===pos2Val && pos2Val===pos3Val )
        {
            console.log("Winner",pos1Val);
           
            showWinner(pos1Val);
        }
    }
    
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);