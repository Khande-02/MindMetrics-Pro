const translations = {
  en: { title: "MindMetrics Pro" },
  np: { title: "माइन्डमेट्रिक्स प्रो" }
};

function switchLanguage(lang){
  document.getElementById("title").innerText =
    translations[lang].title;
}
