//  in this project i'm going to exercise these methods in java script by building -- Break Out -- GAME :
//
//  .querySelector()  __  class  __  constructor  __  this  __  .bottomLeft  __  .bottomRight  
//
//  .topLeft  __  .topRight  __  classList.remove()  __  Array.from()
//
//  classList.add()  __  .creatElement()  __  .style.left  __  .style.bottom  __  appendChild()  __  e.key
//
//  switch()  __  setInterval()  __  clearInterval()  __  .removeEventListener()  __  .lenght  __  .splice() 


//  * displaying properties *
let display = document.getElementById("display");
let XDimention = 672;
let YDimention = 404;
let XGrowth = 2;
let YGrowth = 2;
let timeID;
let score = 0;

//  lenght of block
let blockWidth = 100;
let blockHeight = 25;

//  position of the -- main block -- at start of the game 
let userStartPosition = [280 , 10];
let userCurrentPosition = userStartPosition;

//  position of the -- ball -- at start of the game
let ballStartPosition = [315 , 35];
let ballCurrentPosition = ballStartPosition;


//  * user properties *
//
// creat user block for playing
let user = document.createElement("div");
user.classList.add("user");
display.append(user);
let userResponce = 10;



//  * ball properties *
//
//  creat ball and adding to the display 
let ballDiameter = 25;
const ball = document.createElement("div");
ball.classList.add("ball");
display.append(ball);


//  holding all buttons
let buttons = document.querySelectorAll("button");

//  adding eventListener for every button
buttons.forEach(element => element.addEventListener("click", buttonHandeler));



//  because we want diffrent blocks with uniqe attributes so we creat a class of block insted of function
class Block {
    constructor(xAxis, yAxis){
        this.bottomLeft = [ xAxis , yAxis ];
        this.bottomRight = [ xAxis + blockWidth , yAxis ];
        this.topLeft = [ xAxis , yAxis + blockHeight ];
        this.topRight = [ xAxis + blockWidth , yAxis + blockHeight ];
    }


}


// an array for all of block
let arrBlocks = [
    new Block(10,370),
    new Block(120,370),
    new Block(230,370),
    new Block(340,370),
    new Block(450,370),
    new Block(560,370),

    new Block(10,340),
    new Block(120,340),
    new Block(230,340),
    new Block(340,340),
    new Block(450,340),
    new Block(560,340),
    
    new Block(10,310),
    new Block(120,310),
    new Block(230,310),
    new Block(340,310),
    new Block(450,310),
    new Block(560,310),

];


//  displaying blocks on the board
function displayBlocks (){    
    
    arrBlocks.forEach((e) => {
        let block = document.createElement("div");
        block.classList.add("block");
        block.style.left = e.bottomLeft[0] + "px";
        block.style.bottom = e.bottomLeft[1] + "px";
        display.append(block);
    })
}



// draw user block on the board
function drawUser(){
    user.style.left = userCurrentPosition[0] + "px";
    user.style.bottom = userCurrentPosition[1] + "px";
}



// moving user block on the board
function moveUser (e){
    switch (e.key){
        
        case 'ArrowLeft':
            if(userCurrentPosition[0] > 0){
                userCurrentPosition[0] -= userResponce ;
                drawUser();
            }
            break;
        case 'ArrowRight':
            if(userCurrentPosition[0] < 570){
                userCurrentPosition[0] += userResponce ;
                drawUser();
            }
            break;
    }
}



// add ball to the board
function drawBall (){
    ball.style.left = ballCurrentPosition[0] + "px";
    ball.style.bottom = ballCurrentPosition[1] + "px";
}


//  moving ball on the board
function moveBall (){
    ballCurrentPosition[0] += XGrowth;
    ballCurrentPosition[1] += YGrowth;
    checkCollisions();
    drawBall();
}


//  checking if ball hit or not
function checkCollisions (){

    //  checking collision for any blocks
    for(let i = 0 ; i < arrBlocks.length ; i++) {

        if( ballCurrentPosition[0] >= arrBlocks[i].bottomLeft[0]  &&  ballCurrentPosition[0] <= arrBlocks[i].bottomRight[0]  &&  ballCurrentPosition[1] >= (arrBlocks[i].bottomLeft[1] - ballDiameter)  &&  ballCurrentPosition[1]  <= (arrBlocks[i].topLeft[1] - ballDiameter) ){
            const allBlocks = document.querySelectorAll(".block")
            allBlocks[i].classList.remove("block")
            arrBlocks.splice(i,1);
            changeDirection();
            score ++;

            //  checking for winning the game if all the blocks have been hit
            if(arrBlocks.length === 0){
                alert("Congratulations you have win the game");
                clearInterval(timeID);
            }
            
        }

    }


    //  checking if ball hit the user block or not
    if(ballCurrentPosition[0] >= (userCurrentPosition[0] )  &&  ballCurrentPosition[0] <= (userCurrentPosition[0] + blockWidth)  &&  ballCurrentPosition[1] >= userCurrentPosition[1]  &&  ballCurrentPosition[1] <= (userCurrentPosition[1] + blockHeight)){
        changeDirection();
    }


    //  checking if ball hit the walls of the game or not
    if(ballCurrentPosition[0] >= (XDimention - ballDiameter)  ||  ballCurrentPosition[1] >= (YDimention - ballDiameter)  ||  ballCurrentPosition[0]<=0 ){
        changeDirection();
    }


    //  checking for game over
    if(ballCurrentPosition[1]<=0){
        alert("sorry the ball have touch the ground so you have lost the game");
        document.removeEventListener("keydown", moveUser);
        clearInterval(timeID);
    }
    
}


//  creat function for changing direction if ball hit any hitable thing
function changeDirection (){

    if(XGrowth > 0 && YGrowth > 0){
        XGrowth = (-1 * XGrowth);
        return
    }

    else if(XGrowth < 0 && YGrowth > 0){
        YGrowth = (-1 * YGrowth);
        return
    }

    else if(XGrowth < 0 && YGrowth < 0){
        XGrowth = (-1 * XGrowth);
        return
    }

    else if(XGrowth > 0 && YGrowth < 0){
        YGrowth = (-1 * YGrowth);
        return
    }

}

//  this function determine the difficulty of the game based on the which button has been clicked
function buttonHandeler (event){

    if(event.target.id === "easy"){
        XGrowth = Math.sign(XGrowth) * 2;
        YGrowth = Math.sign(YGrowth) * 2;
        userResponce = 10;
    }

    else if(event.target.id === "medium"){
        XGrowth = Math.sign(XGrowth) * 4;
        YGrowth = Math.sign(YGrowth) * 4;
        userResponce = 12;
    }

    else if(event.target.id === "hard"){
        XGrowth = Math.sign(XGrowth) * 6;
        YGrowth = Math.sign(YGrowth) * 6;
        userResponce = 14;
    }

}


displayBlocks();
drawUser();
drawBall();
document.addEventListener("keydown", moveUser);
timeID = setInterval(moveBall, 25);

