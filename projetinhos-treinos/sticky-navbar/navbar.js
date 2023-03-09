const navbar = document.querySelector(".navbar")

const segundaSecao = document.querySelector(".segunda-seção")

window.addEventListener("scroll", ()=>{
    if(window.scrollY > segundaSecao.offsetTop - navbar.offsetHeight - 50){
        navbar.classList.add("active");
    } else{
        navbar.classList.remove("active");
    }
})