document.getElementById("sendBtn").addEventListener("click", () => {
  const chat1 = document.getElementById("chat1").value.trim();
  const chat2 = document.getElementById("chat2").value.trim();

  if (!chat1 && !chat2) {
    alert("Digite algo nos campos.");
    return;
  }

  // DEMO: não envia dados para fora
  alert("Mensagem processada com sucesso ✔️");

  document.getElementById("chat1").value = "";
  document.getElementById("chat2").value = "";
});