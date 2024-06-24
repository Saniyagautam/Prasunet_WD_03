let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");
let newgamebtn=document.querySelector(".newgame-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
const winpattern=[//array of arrays
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let turn0=true;//PlayerX , player0
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0===true){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;//so that can't change the value
        checkWinner();
    }) 
})
//btn
const resetgame=()=>{
    turn0=true;
    enablebtns();
    msgcontainer.classList.add("hide");
}
const disablebtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enablebtns=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

// msg shower
const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is "${winner}"`;
    msgcontainer.classList.remove("hide");
    disablebtns();
}

isWinner=false;
const checkWinner=()=>{
    for(let pattern of winpattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 !=="" && pos2 !=="" && pos3 !==""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1); 
                isWinner=true;
                break;
            }
        }
    }
};
if(isWinner === false){
    msg.innerText=`draw`;
    msgcontainer.classList.remove("hide");
}
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);