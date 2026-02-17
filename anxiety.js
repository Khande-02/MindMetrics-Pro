const questions = [
  "Paste Anxiety Question 1",
  "Paste Anxiety Question 2",
  "Paste Anxiety Question 3",
  // continue
];

const container = document.getElementById("questions");

questions.forEach((q, i) => {
  container.innerHTML += `
    <div class="question">
      <p>${i+1}. ${q}</p>
      <label><input type="radio" name="q${i}" value="0" required>0</label>
      <label><input type="radio" name="q${i}" value="1">1</label>
      <label><input type="radio" name="q${i}" value="2">2</label>
      <label><input type="radio" name="q${i}" value="3">3</label>
    </div>
  `;
});

document.getElementById("anxietyForm").addEventListener("submit", function(e){
  e.preventDefault();

  let total = 0;

  questions.forEach((_, i) => {
    total += parseInt(document.querySelector(`input[name="q${i}"]:checked`).value);
  });

  document.getElementById("result").innerHTML = `
    <div class="result">
      <h3>Total Score: ${total}</h3>
      Severity: ${interpret(total)}
    </div>
  `;
});

function interpret(score){
  if(score <=4) return "Minimal";
  if(score <=9) return "Mild";
  if(score <=14) return "Moderate";
  return "Severe";
}
