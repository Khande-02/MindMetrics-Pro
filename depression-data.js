const depressionTest = {
  title: "Depression Assessment",
  questions: [
    "Little interest or pleasure in doing things",
    "Feeling down, depressed, or hopeless",
    "Trouble falling or staying asleep, or sleeping too
much",
    "Feeling tired or having little energy",
    "Poor appetite or overeating",
    " Feeling bad about yourself — or that you are a
failure",
    "Trouble concentrating on things",
    "Moving or speaking slowly or being fidgety/restless",
    "Thoughts that you would be better off dead or of
hurting yourself",
  ],

  scoring: function(score) {
    if(score <= 9) return "Normal";
    if(score <= 13) return "Mild";
    if(score <= 20) return "Moderate";
    if(score <= 27) return "Severe";
    return "Extremely Severe";
  }
};
