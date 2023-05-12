// in this project i'm trying to learn these method in java script by using them to creat simple game named rock paper scissors:
// 
// .getElementById()  __  .querySelectorAll()  __  .forEach()  
// 
// .addEventListener()  __  .innerHTML  __  e.target.id
// 
// Math.floor()  __  Math.random()


//  holding this element for showing any change
let result = document.getElementById("result");

//  showing computer choice
let computerText = document.getElementById("textComputer");
let computerImg = document.getElementById("imgComputer");


//  showing human choice
let userText = document.getElementById("textUser");
let userImg = document.getElementById("imgUser");

//  holding all buttons
let choices = document.querySelectorAll('button');

let userchoice;
let computerchoice;
let resulttemp;

//  iterating through each bottun that we initialized in html documnet and adding event listener to them 
choices.forEach(element => element.addEventListener('click', (e) => {

    //  if any click event happening we find whitch button has been clicked then and we get it's id and showing user choice
    userchoice = e.target.id;
    userText.innerHTML = userchoice;
    userImg.src = findProperImage(userchoice);;

    //  generate one choice for computer with generateCompupterChoice() function
    computerchoice = generateComputerChoice();
    computerText.innerHTML = computerchoice; 
    computerImg.src = findProperImage(computerchoice);
    
    //  finding how is the winner and showing the result 
    resulttemp = findWinner(userchoice, computerchoice);
    result.innerHTML = resulttemp;

}));

//  find proper image based for each choice
function findProperImage(number){
    if (number === "Rock"){
        return "./images/rock.png";
    }
    else if (number === "Paper"){
        return "./images/paper.png";
    }
    else if (number === "Scissors"){
        return "./images/scissors.png";
    }
}

//  generate random number between 1 to 3 for three choices of computer
function generateComputerChoice(){
    let number =  Math.floor(Math.random() * 3 + 1);
    if (number === 3){
        computerchoice = "Rock";
        return "Rock";
    }
    else if (number === 2){
        computerchoice = "Paper";
        return "Paper";
    }
    else if (number === 1){
        computerchoice = "Scissors";
        return "Scissors";
    }
}

//  finding who is the winner based on choices
function findWinner(choiceuser, choicecomputer){
    if(choicecomputer === "Rock"){

        if(choiceuser === "Rock"){
            return "Draw"
        }

        else if (choiceuser === "Paper"){
            return "User wins"
        }

        else if (choiceuser === "Scissors"){
            return "Computer wins"
        }

    }

    else if(choicecomputer === "Paper"){

        if(choiceuser === "Rock"){
            return "Computer wins"
        }

        else if (choiceuser === "Paper"){
            return "Draw"
        }

        else if (choiceuser === "Scissors"){
            return "User wins"
        }
        
    }

    else if(choicecomputer === "Scissors"){

        if(choiceuser === "Rock"){
            return "User wins"
        }

        else if (choiceuser === "Paper"){
            return "Computer wins"
        }

        else if (choiceuser === "Scissors"){
            return "Draw"
        }
        
    }
}
