document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll(".botao");

    botoes.forEach(botao => {
        botao.addEventListener("click", function () {
            const mensagem = this.nextElementSibling;
            mensagem.style.opacity = "1";

            setTimeout(() => {
                mensagem.style.opacity = "0";
            }, 2000);
        });
    });
});
