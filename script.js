let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let Turn = 'X';
let isgameover = false;

// change the turn function
const changeTurn = () => {
    return Turn === 'X' ? '0' : 'X';
}

// check for win function
const checkWin = () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if(boxtexts[e[0]].innerHTML === boxtexts[e[1]].innerHTML && boxtexts[e[1]].innerHTML === boxtexts[e[2]].innerHTML && boxtexts[e[0]].innerHTML !== ''){
            document.getElementsByClassName("info")[0].innerText = boxtexts[e[0]].innerText + ' Won';
            isgameover = true;
            document.getElementsByClassName('imgbox')[0].getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}

// enter the text into boxes
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = Turn;
            Turn = changeTurn();
            ting.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
            }
        }
    })
})

// reset botton

let reset = document.getElementById("reset");
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = '';
    })
        Turn = "X"; 
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + Turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
