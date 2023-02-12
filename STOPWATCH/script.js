// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
     // 3600000 milliseconds is equal to 1 hour(1000x60x60)
    //to hours
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
     //The Math. floor() method rounds a number DOWN to the nearest integer.

    // to minutes
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

      // to seconds
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    // to millisecond
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    //The padStart() method in JavaScript is used to pad a string with another string until it reaches the given length.
    //The padding is applied from the left end of the string. 
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
  
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
  }
  
  // Declare variables to use in our functions below
  
  let startTime;
  let elapsedTime = 0;
  let timerInterval;
  
  // Create function to modify innerHTML
  
  function print(txt) {
    document.getElementById("display").innerHTML = txt;
  }
  
  // Create "start", "pause" and "reset" functions
  
  function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 10);
    showButton("PAUSE");
  }
  
  function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
  }
  
  function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
  }
  
  // Create function to display buttons
  
  function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
  }
  // Create event listeners
  
  let playButton = document.getElementById("playButton");
  let pauseButton = document.getElementById("pauseButton");
  let resetButton = document.getElementById("resetButton");
  
  playButton.addEventListener("click", start);
  pauseButton.addEventListener("click", pause);
  resetButton.addEventListener("click", reset);
  