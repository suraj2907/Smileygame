
const cards = document.querySelectorAll(".card");
console.log(cards);

// Variables
let isFlipped = false;
let firstCard;
let secondCard;



const flip = function () {
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);
    checkIt();
  }
};

cards.forEach((card) => card.addEventListener("click", flip));

const checkIt = () => {
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
};

const success = () => {
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
};

const fail = () => {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
};

const reset = () => {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
};

const shuffle = () => {
  cards.forEach((card) => {
    const index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
};

window.onload = shuffle;
