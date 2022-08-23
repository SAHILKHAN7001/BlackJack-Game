let allcards = [];
let sum = 0;
let isAlive = false
let message = " ";
let message2 = document.getElementById("start");
let cards = document.getElementById("cards")
let sum2 = document.getElementById("sum");
let HasBlackJack = false;


let Player = {
    name:"Unkown",
    chips:"500"
}

let player = document.getElementById("player");
player.textContent = Player.name + ": " + "$" + Player.chips;


function StartGame() {
    isAlive = true;
    let card1 = RandomCard();
    let card2 = RandomCard();
     allcards = [card1, card2]
     sum = card1 + card2;
     RenderGame()
}

function RandomCard() {
   let random = Math.floor(Math.random() * 13) + 1;
  if(random >10) {
    return 10;
  } else if(random ===1) {
    return 11;
  } else {
    return random;
  }
}


function RenderGame() {
    cards.textContent = "Cards: "  ;
    for(let i = 0; i < allcards.length; i++) {
        cards.textContent += allcards[i] + " ";
    }
    sum2.textContent = "Sum: " + sum;
   if(sum <= 20) {
    message = "Want A New Card !";
   }
   else if(sum === 21) {
    message = "You Got a BlackJack !";
    HasBlackJack = true;
   }
   else {
    message = "Sorry, You are Out !";
    isAlive = false;
   }
   message2.textContent = message;
}

function NewCard() {
    if(isAlive === true && HasBlackJack === false) {
     let card3 = RandomCard();
        sum += card3;
        allcards.push(card3);
        RenderGame()
    }
 }

 function Reset() {
  allcards = [];
sum = 0;
    cards.textContent="Cards: " ;
    sum2.textContent="Sum: " ;
    message2.textContent="Want to Play a Round ?";
 }