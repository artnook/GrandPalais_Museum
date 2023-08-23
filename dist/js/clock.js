// Zeit
// (cc-by-nc) 2013 by Michael Markert
//

var display = document.getElementById("display");

function addLeadingZero(num) {
  // num is 1  => returns 01
  // num is 99 => returns 99
  var str = "0" + num;
  str = str.slice(-2);
  return str;
}

function getTimeString() {
  var now = new Date();
  var hr = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();

  hr = addLeadingZero(hr);
  min = addLeadingZero(min);
  sec = addLeadingZero(sec);

  var time = hr + ":" + min + ":" + sec;
  return time;
}

function updateClock() {
  var time = getTimeString();
  display.textContent = time;
}

setInterval(updateClock, 1000);
