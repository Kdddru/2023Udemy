const cards = document.querySelectorAll(".card");
const orderList = [];

let checkCards=[];

//초기화 함수
function init(){
  addClickEventToCard();
  pushOrderList();
  suffle();
}

//모든 카드에게 클릭이벤트 부여
function addClickEventToCard(){
  cards.forEach((card)=>card.addEventListener('click',flipCard));
}

//카드 갯수 
function pushOrderList(){
  cards.forEach((card, i)=>{
    orderList.push(i); 
  })
}

//선택된 카드 뒤집기
function flipCard(){
  if(checkCards.length<2){
    this.classList.add('flip');
    checkCards.push(this);
    checkCards[0] === checkCards[1] && checkCards.shift();
  }
  if(checkCards.length === 2){
    checkMatch(); 
  } 
}

//선택된 2개의 카드 같은지 체크
function checkMatch(){
  const [firstCard, secondCard] = checkCards;
  const isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCard() : resetCard();
}

//선택된 2개의 카드가 같으면 클릭이벤트 제거
function disableCard(){
  checkCards.forEach((card)=>card.removeEventListener('click',flipCard));
  checkCards = [];
}

//선택된 2개의 카드가 틀릴경우 뒤집기 취소
function resetCard(){
  setTimeout(()=>{
    checkCards.forEach((card)=>card.classList.remove('flip'));
    checkCards = [];
  }, 1000);
  
}

//OrderList 배열안 값 랜덤 섞기
//비구조화 할당
//fisher-Yates
function suffleArr(arr){
  arr.forEach((card, i)=>{
    const randomIndex = Math.floor(Math.random()*arr.length);
    [arr[randomIndex],arr[i]] = [arr[i], arr[randomIndex]];
  })
}


//style flex일경우 order 속성을 가지고 있음
//카드섞기
function suffle(){
  suffleArr(orderList);
  cards.forEach((card, i)=>{
    card.style.order = orderList[i];
  })
}

init();