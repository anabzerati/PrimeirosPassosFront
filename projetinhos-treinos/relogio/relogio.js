const hora = document.getElementById("hora")
const min = document.getElementById("minuto")
const seg = document.getElementById("segundo")
const ampm = document.getElementById("am-pm")

function atualizar(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h > 12){
        h = h - 12
        ampm = "PM"
    }

    h = h<10? "0" + h : h
    m = m<10? "0" + m : m
    s = s<10? "0" + s : s

    hora.innerText = h;
    min.innerText = m;
    seg.innerText = s;
    ampm.innerText = ampm;

    setTimeout(()=>{
        atualizar()
    }, 1000)
}

atualizar()