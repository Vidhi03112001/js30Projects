const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
//const getDate=document.querySelector("#s");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  //  const hourDegrees = (mins / 12) * 360 + 90;
  const hourDegrees=(hour / 12) * 360 + (mins / 60) * 30 + 90
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}



function updateClock() {
  const now = new Date();
  const hours = String(now.getHours());
  const minutes = String(now.getMinutes());
  const seconds = String(now.getSeconds());
  
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  document.getElementById('time').innerText = formattedTime;
  
}

function updateDate(){
const now=new Date();
const date=String(now.getDate());
const month=String(now.getMonth()+1);
const year=String(now.getFullYear());

const formattedDate=`${date}/${month}/${year}`;
document.getElementById('date').innerText=formattedDate;
}

setInterval(updateClock, 1000);
updateClock();
setInterval(updateDate,1000)
updateDate();
setInterval(setDate);


