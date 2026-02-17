const questions = [
"I found myself getting upset by quite trivial things.",
"I was aware of the dryness of my mouth.",
"I couldn’t seem to experience any positive feeling at all.",
"I experienced breathing difficulty.",
"I found it difficult to work up the initiative to do things.",
"I tended to over-react to situations.",
"I experienced trembling.",
"I felt that I was using a lot of nervous energy.",
"I was worried about situations in which I might panic.",
"I felt that I had nothing to look forward to.",
"I found myself getting agitated.",
"I found it difficult to relax.",
"I felt down-hearted and blue.",
"I was intolerant of anything that kept me from getting on.",
"I felt I was close to panic.",
"I was unable to become enthusiastic about anything.",
"I felt I wasn’t worth much as a person.",
"I felt that I was rather touchy.",
"I was aware of the action of my heart.",
"I felt scared without any good reason.",
"I felt that life was meaningless.",
"I found it hard to wind down.",
"I had difficulty swallowing.",
"I couldn’t seem to get enjoyment out of things.",
"I was aware of the beating of my heart.",
"I felt down-hearted and blue.",
"I found myself getting impatient when delayed.",
"I felt I was close to panic.",
"I felt that I was rather touchy.",
"I was aware of trembling.",
"I felt that life was meaningless.",
"I found it hard to calm down after something upset me.",
"I felt I was pretty worthless.",
"I was intolerant of anything that kept me from getting on.",
"I felt terrified.",
"I found it difficult to work up initiative.",
"I felt that I had nothing to look forward to.",
"I felt that I was using a lot of nervous energy.",
"I felt scared without good reason.",
"I found it hard to wind down.",
"I felt sad and depressed.",
"I felt that I was losing control."
];

// Subscale Index (0-based index)
const depressionIndex = [2,4,9,12,15,16,20,23,25,30,33,36,37,41];
const anxietyIndex = [1,3,6,8,14,18,19,22,24,27,29,35,39,40];
const stressIndex = [0,5,7,10,11,13,17,21,26,28,31,32,34,38];

const container = document.getElementById("questionsContainer");

questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `
        <p>${i+1}. ${q}</p>
        ${createOptions(i)}
    `;
    container.appendChild(div);
});

function createOptions(index) {
    return `
        <label><input type="radio" name="q${index}" value="0" required> 0</label>
        <label><input type="radio" name="q${index}" value="1"> 1</label>
        <label><input type="radio" name="q${index}" value="2"> 2</label>
        <label><input type="radio" name="q${index}" value="3"> 3</label>
    `;
}

document.getElementById("assessmentForm").addEventListener("submit", function(e){
    e.preventDefault();

    let depression = 0;
    let anxiety = 0;
    let stress = 0;

    questions.forEach((_, i) => {
        const value = parseInt(document.querySelector(`input[name="q${i}"]:checked`).value);

        if (depressionIndex.includes(i)) depression += value;
        if (anxietyIndex.includes(i)) anxiety += value;
        if (stressIndex.includes(i)) stress += value;
    });

    document.getElementById("result").innerHTML = `
        Depression Score: ${depression} <br>
        Anxiety Score: ${anxiety} <br>
        Stress Score: ${stress}
    `;
});
