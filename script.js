let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let winMsg = document.querySelector(".win-msg")
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#new-game"); 

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


const showWinner = (winner) =>{
    msg.innerText = `Congratulations! ${winner} has won the game!!`;
    winMsg.classList.remove("hide");
    gameEnd();
}


const checkWin = () => {
    for(let pattern of winPatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innertext,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // ); 

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                // console.log(pos1, "Won the game!!");
                showWinner(pos1)
            }
        }
    }
}

gameEnd = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

gameStart = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

let clicks = 0;


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("clicked");
        clicks++;
        if(clicks === 9){
            msg.innerText = "The game was a draw!!";
            winMsg.classList.remove("hide");
        }
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWin();
    })
})

const resetGame = () => {
    turnO = true;
    gameStart();
    winMsg.classList.add("hide");
    clicks = 0;
}

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
