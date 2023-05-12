// i'm going to learn these methods for js by creating Memory game :
//
//  .querySelector()  __  .Math.random()  __  .lenght  __  .creatElement()  __  append() __  .appendChild()  __  .getAttribute() 
// 
//  alert()  __  .push()  __  setTimeOut()  __  .querySelectorAll()  __  .removeEventListener()  __  .textContent



// Notes:
//
//  difference between append and appendChild is :
//  1- appendChild returns the appended object
//  2- in append we can add multiple objects were in appendChild we can't
//  3- in append wa can add objects and DOMStrings ( means text :| ) were in appendChild we can only add objects


let cards = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },

    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },

    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },

    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },

    {
        name: 'pizza',
        img: 'images/pizza.png'
    },

    {
        name: 'fries',
        img: 'images/fries.png'
    },

    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },

    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },

    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },

    {
        name: 'pizza',
        img: 'images/pizza.png'
    },

    {
        name: 'tea',
        img: 'images/tea.png'
    },

    {
        name: 'tea',
        img: 'images/tea.png'
    },

    {
        name: 'cake',
        img: 'images/cake.png'
    },

    {
        name: 'cake',
        img: 'images/cake.png'
    }

]




cards.sort(() => 0.5 - Math.random());

let display = document.querySelector("#display");
const choesnCards = []
const choesnCardsID = []
let counter = 0;


function createBoard (){
    for(let i = 0; i < cards.length; i++){
        let place = document.createElement("img");
        place.setAttribute("src", "images/blank.png");
        place.setAttribute("id", i);
        place.addEventListener('click', flipCard);
        display.append(place);
    }
}


function flipCard(){
    let clicked = this.getAttribute('id');
    choesnCards.push(cards[clicked].name);
    choesnCardsID.push(clicked);
    this.setAttribute("src", cards[clicked].img);
    if(choesnCards.length === 2){
        setTimeout(checkCondition, 500);
    }
    console.log(choesnCards);
}


function checkCondition (){
    let temp = document.querySelectorAll("#display img");
    if(choesnCards[0] === choesnCards[1]){
        console.log("correct");
        choesnCardsID.forEach((e) => {
            temp[e].setAttribute("src", "images/white.png")
            temp[e].removeEventListener('click', flipCard);
            temp[e].style.cursor = "default";
        })
        counter++;
    }

    else{
        console.log("wrong");
        choesnCardsID.forEach((e) => {
            temp[e].setAttribute("src", "images/blank.png");
        })
    }
    document.getElementById("result").innerHTML = counter;
    if(counter === 8){
        alert("Congratulations you have successfully finished the Memory game !!!")
    }
    choesnCards.length = 0;
    choesnCardsID.length = 0;
}

createBoard();