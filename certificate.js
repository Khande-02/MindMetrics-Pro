function generateCertificate(name, score){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("Certificate of Completion", 20, 20);
  doc.text("Name: " + name, 20, 40);
  doc.text("Score: " + score, 20, 50);

  doc.save("certificate.pdf");
}
