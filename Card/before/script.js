const cards = document.querySelectorAll(".card");
const orderList = [];


let hasFlippedCard =false

function pushOrderList(){
  cards.forEach((card, i)=>{
    orderList.push(i)
  })
}
pushOrderList();

console.log(cards);
console.log(orderList);

//OrderList 배열안 값 랜덤 섞기
function suffleArr(arr){
  arr.forEach((card, i)=>{
    const randomIndex = Math.floor(Math.random()*arr.length);
    [arr[randomIndex],arr[i]] = [arr[i], arr[randomIndex]];
  })
}


//style flex일경우 order 속성
function suffle(){
  suffleArr(orderList);
  console.log(orderList);
  cards.forEach((card, i)=>{
    card.style.order = orderList[i];
  })
}

suffle();
