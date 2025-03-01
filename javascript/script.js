document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll(".botao");

    botoes.forEach(botao => {
        botao.addEventListener("click", function () {
            const mensagem = this.nextElementSibling;
            if (mensagem.style.display === "none") {
                mensagem.style.display = "block";
            } else {
                mensagem.style.display = "none";
            }
        });
    });
});
