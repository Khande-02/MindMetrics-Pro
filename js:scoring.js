function calculateScore() {
  let total = 0;
  let selects = document.querySelectorAll("select");

  selects.forEach(s => total += parseInt(s.value));

  let severity = "";

  if (total <= 4) severity = "Minimal";
  else if (total <= 9) severity = "Mild";
  else if (total <= 14) severity = "Moderate";
  else if (total <= 19) severity = "Moderately Severe";
  else {
    severity = "Severe";
    alert("If you are in crisis, please contact emergency support.");
  }

  document.getElementById("result").innerHTML =
    "Score: " + total + " | Level: " + severity;

  localStorage.setItem("lastScore", total);
}
