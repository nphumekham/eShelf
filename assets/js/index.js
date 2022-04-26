var lightbulb = document.getElementById("lightbulb");
lightbulb.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    lightbulb.src = "assets/images/light-yellow.png"
  }
  else{
    lightbulb.src = "assets/images/light-black.png"
  }
}

function timer(time) {
    // cal in seconds, input in minute
      var seconds = 60 * time,
          display = document.querySelector('#time');
     console.log("in timer"+time);
      startTimer(seconds, display);
    };
    
    function startTimer(duration, display) {
      var timer = duration, minutes, seconds;
      setInterval(function () {
          minutes = parseInt(timer / 60, 10)
          seconds = parseInt(timer % 60, 10);
    
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
    
          display.textContent = minutes + ":" + seconds;
    
          if (--timer < 0) {
              timer = duration;
          }
      }, 1000);
    }
    