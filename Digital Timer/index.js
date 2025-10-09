const hourtime = document.getElementById("tim-hr");
const minutetime = document.getElementById("tim-min");
const secondtime = document.getElementById("tim-sec");

function digitaltimer() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let ampm = "AM";
  if (hours >= 12) {
    ampm = "PM";
    if (hours > 12) hours -= 12;
  }
  if (hours === 0) {
    hours = 12;
  }
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  hourtime.innerHTML = hours;
  minutetime.innerHTML = minutes;
  secondtime.innerHTML = seconds;

  document.getElementById("tim-hourr").innerText = ampm;
  setTimeout(digitaltimer, 1000);
}

digitaltimer();
