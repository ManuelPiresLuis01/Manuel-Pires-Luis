let menu = document.getElementById("menu")
let botaoMenu = document.getElementById("btn-menu")
let overflow = document.querySelector(".overflow")
let data = new Date()

document.getElementById("ano").innerHTML = data.getFullYear()
botaoMenu.addEventListener("click", function () {
    menu.classList.add("abrir")
    overflow.classList.add("abrir")
})

menu.addEventListener("click", function () {
    menu.classList.remove("abrir")
    overflow.classList.remove("abrir")
})


overflow.addEventListener("click", function () {
    menu.classList.remove("abrir")
    overflow.classList.remove("abrir")
})



let infor = document.getElementById("infor")
function enviado() {
    let nome = document.getElementById("nome")
    let email = document.getElementById("email")
    let msg = document.getElementById("msg")
    let select = document.getElementById("select")
    if (nome.value != "" && email.value != "" && msg.value != "" ) {
        for (var i = 0; i < email.value.length; i++) {
            if (email.value.charAt(i) =='@gmail.com' || email.value.charAt(i) =='@hotmail.com' || email.value.charAt(i) =='@') {
                infor.classList.add("abrir")
                nome = ""
                email = ""
                msg = ""
            }
        }
    }

}

document.getElementById("btnfechar").addEventListener("click", function () {
    infor.classList.remove("abrir")
    nome.value = ""
    email.value = ""
    msg.value = ""
})


document.getElementById("email1").addEventListener("click", function () {
    infor.classList.remove("abrir")
    nome.value = ""
    email.value = ""
    msg.value = ""
})

