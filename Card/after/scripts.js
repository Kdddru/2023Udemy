const cards = document.querySelectorAll(".card");
const orderList = [];

let selectedCards = [];

function initialize() {
  assignClickEventToCards();
  populateOrderList();
  shuffle();
}

function assignClickEventToCards() {
  cards.forEach((card) => card.addEventListener('click', flipCard));
}

function populateOrderList() {
  cards.forEach((card, i) => {
    orderList.push(i);
  });
}

function flipCard() {
  if (selectedCards.length < 2) {
    this.classList.add('flip');
    selectedCards.push(this);
    if (selectedCards.length === 2) {
      checkMatch();
    }
  }
}

function checkMatch() {
  const [firstCard, secondCard] = selectedCards;
  const isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : resetCards();
}

function disableCards() {
  selectedCards.forEach((card) => card.removeEventListener('click', flipCard));
  selectedCards = [];
}

function resetCards() {
  setTimeout(() => {
    selectedCards.forEach((card) => card.classList.remove('flip'));
    selectedCards = [];
  }, 1000);
}

function shuffleArray(arr) {
  arr.forEach((card, i) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    [arr[randomIndex], arr[i]] = [arr[i], arr[randomIndex]];
  });
}

function shuffle() {
  shuffleArray(orderList);
  cards.forEach((card, i) => {
    card.style.order = orderList[i];
  });
}

// 초기화 함수 호출
initialize();
