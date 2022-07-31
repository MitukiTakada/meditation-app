const container = document.querySelector(".container")
let mySong = document.getElementById("mySong");
let icon = document.getElementById("icon");
let text = document.querySelector(".text");

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "./images/pause.png"
  }
  else {
    mySong.pause();
    icon.src = "./images/play.png"
  }
}



const meditateFunction = () => {
  text.innerHTML ="吸って!"
  container.className = "container grow"
  setTimeout(() => {
    text.innerHTML ="止めて!"
    container.className="container hold"
    setTimeout(() => {
      text.innerHTML ="吐いて!"
      container.className = "container shrink"
    },holdTime)
  }, breathTime)
}
meditateFunction()

setInterval(meditateFunction, totalTime);