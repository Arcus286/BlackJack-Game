let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messaegEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");

function getRandomCard() {
  let num = Math.floor(Math.random() * 13) + 1;
  if(num === 1){
    return 11;
  }
  else if(num>=11){
    return 10;
  }
  else{
    return num;
  }
}

function startGame() {
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do u want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got BlackJack";
    hasBlackJack = true;
  } else {
    message = "You are out of the game";
    isAlive = false;
  }
  messaegEl.textContent = message;
}

function newCard() {
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}
