// Depression
function calculateDepression(){
  let score = parseInt(document.getElementById("q1").value);

  let message = interpret(score);

  document.getElementById("result").innerHTML =
    "Score: " + score + "<br>" + message;

  localStorage.setItem("lastScore", score);
}

function interpret(score){
  if(score == 0) return "Minimal symptoms.";
  if(score == 1) return "Mild emotional distress.";
  if(score == 2) return "Moderate symptoms detected.";
  return "Severe symptoms. Consider professional help.";
}

// IQ Timer
let timeLeft = 60;
let timer = setInterval(function(){
  timeLeft--;
  document.getElementById("timer").innerText = timeLeft;

  if(timeLeft <= 0){
    clearInterval(timer);
    submitIQ();
  }
},1000);

function submitIQ(){
  clearInterval(timer);
  let ans = document.getElementById("iqAnswer").value;

  if(ans == 12){
    document.getElementById("iqResult").innerText =
      "Correct! Above average.";
  } else {
    document.getElementById("iqResult").innerText =
      "Incorrect.";
  }
}
