const questions = [
  "Paste Stress Question 1",
  "Paste Stress Question 2",
  "Paste Stress Question 3",
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

document.getElementById("stressForm").addEventListener("submit", function(e){
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
  if(score <=13) return "Low Stress";
  if(score <=26) return "Moderate Stress";
  return "High Stress";
}
