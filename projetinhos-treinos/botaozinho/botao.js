const botao = document.querySelector(".botao")

botao.addEventListener("mouseover", (event) => {
    const x = (event.pageX - botao.offsetLeft) + 60;
    const y = (event.pageY - botao.offsetTop) + 30;

    botao.style.setProperty("--xPos", x + "px")
    botao.style.setProperty("--yPos", y + "px")
})