document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll(".btn-buy");

  botoes.forEach((botao) => {
    botao.addEventListener("click", function () {
      const mensagem = this.nextElementSibling;

      const textoOriginal = this.textContent;
      this.textContent = "Interesse Registrado!";
      this.style.backgroundColor = "#28a745";
      this.style.color = "white";
      this.style.borderColor = "#28a745";

      mensagem.style.opacity = "1";
      mensagem.style.transform = "translateY(0)";

      setTimeout(() => {
        mensagem.style.opacity = "0";
        mensagem.style.transform = "translateY(10px)";
        this.textContent = textoOriginal;
        this.style.backgroundColor = "transparent";
        this.style.color = "black";
        this.style.borderColor = "black";
      }, 3000);
    });
  });
});
