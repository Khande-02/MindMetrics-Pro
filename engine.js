const selector = document.getElementById("testSelector");
const container = document.getElementById("questionContainer");
const form = document.getElementById("assessmentForm");
const resultBox = document.getElementById("resultBox");

let currentTest = null;

selector.addEventListener("change", function(){
  container.innerHTML = "";
  resultBox.innerHTML = "";
  const value = this.value;
  if(!value) return;

  currentTest = tests[value];

  currentTest.questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `
      <p>${i+1}. ${q}</p>
      ${renderOptions(i)}
    `;
    container.appendChild(div);
  });
});

function renderOptions(i){
  return `
    <label><input type="radio" name="q${i}" value="0" required>0</label>
    <label><input type="radio" name="q${i}" value="1">1</label>
    <label><input type="radio" name="q${i}" value="2">2</label>
    <label><input type="radio" name="q${i}" value="3">3</label>
  `;
}

form.addEventListener("submit", function(e){
  e.preventDefault();

  let scores = {};

  for(const section in currentTest.sections){
    scores[section] = 0;
  }

  currentTest.questions.forEach((_, i) => {
    const value = parseInt(document.querySelector(`input[name="q${i}"]:checked`).value);

    for(const section in currentTest.sections){
      if(currentTest.sections[section].items.includes(i)){
        scores[section] += value;
      }
    }
  });

  let output = "<div class='result'><h3>Results</h3>";

  for(const section in scores){
    const interpretation = currentTest.sections[section].interpretation(scores[section]);
    output += `<p>${section.toUpperCase()}: ${scores[section]} — ${interpretation}</p>`;
  }

  output += "</div>";
  resultBox.innerHTML = output;
});
