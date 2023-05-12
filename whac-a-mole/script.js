//  in this mini project i'm going to learn these methods by building Whol-a-mole game :
//
//  .querySelectorAll()  __  .querySelector()  __  .forEach()  __  .classList.add()  __  .classList.remove()
//
//  Math.floor()  __  Math.random()  __  .addEventListener() __  .textContenet  __  .id 
// 
//  setInterval()  __  clearInteval()  __  alert()


let board = document.getElementById("display");
let mole = document.querySelector(".mole");
let result = document.getElementById("result");
let time = document.getElementById("time");

let hitPosition;
let score = 0;
let courrentTime = 10;

const allSquare = []

function createBoard (){
    for (let i = 0 ; i < 9 ; i++ ){
        let place = document.createElement("div");
        place.setAttribute("class", "square");
        place.setAttribute("id", i);
        place.style.border = "solid black 1px";
        place.style.width = "180px";
        place.style.height = "180px";
        place.addEventListener("mousedown", checkClick)
        allSquare.push(place);
        board.append(place);
    }
}

function setMole (){

    allSquare.forEach(square =>{
        square.classList.remove('mole');
    })

    let randomPosition = allSquare[Math.floor(Math.random()*9)];
    randomPosition.classList.add("mole");
    hitPosition = randomPosition.id;
}




function checkClick (){
    let clicked = this;
    if(hitPosition === clicked.id){
        clicked.classList.remove("mole")
        hitPosition = null;
        score ++;
        result.innerHTML = score;
    }
}


function countDown (){
    courrentTime --;
    time.innerHTML = courrentTime;
    if (courrentTime === 0){
        clearInterval(begin);
        clearInterval(timeBegin);
        allSquare.forEach(square =>{
            square.classList.remove('mole');
        })
        alert("your time is up !!!  final score is :"+ score);
    }

}

createBoard();

let begin = setInterval(setMole, 2000);
let timeBegin = setInterval(countDown, 1000);