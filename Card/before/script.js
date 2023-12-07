const cards = document.querySelectorAll(".card");
const orderList = [];

let checkCards=[];


function flipCard(){
  if(checkCards.length<2){
    this.classList.add('filp');
    checkCards.push(this);
  }
  checkCards.length === 2 && checkMatch() 
}

function checkMatch(){
  const firstCard = checkCards[0].dataset.name;
  const secondCard = checkCards[1].dataset.name;

  const isMatch = firstCard === secondCard;
  console.log(isMatch);
}





function pushOrderList(){
  cards.forEach((card, i)=>{
    orderList.push(i); 
  })
}
pushOrderList();

//OrderList 배열안 값 랜덤 섞기
function suffleArr(arr){
  arr.forEach((card, i)=>{
    const randomIndex = Math.floor(Math.random()*arr.length);
    [arr[randomIndex],arr[i]] = [arr[i], arr[randomIndex]];
  })
}


//style flex일경우 order 속성을 가지고 있음
function suffle(){
  suffleArr(orderList);
  console.log(orderList);
  cards.forEach((card, i)=>{
    card.style.order = orderList[i];
  })
}
suffle();


cards.forEach((card)=>card.addEventListener('click',flipCard))

