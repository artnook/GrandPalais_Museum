const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  // SECONDS
  const seconds = now.getSeconds();
  // turns each second of the minute into degree
  const secondsDegrees = (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // MINUTES
  const minutes = now.getMinutes();
  // turns each minute of the hour into degree
  const minutesDegrees = (minutes / 60) * 360;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // HOURS
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log(seconds);
}

setInterval(setDate, 1000);

// creates 12 dial items
for (var i = 0; i <= 12; i++) {
  var dialHours = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
}
