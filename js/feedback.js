document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const feedback = document.getElementById("feedback").value;
    alert("Obrigado pelo seu feedback! Ele foi enviado com sucesso.");
    localStorage.setItem("feedback", feedback);
  });
  