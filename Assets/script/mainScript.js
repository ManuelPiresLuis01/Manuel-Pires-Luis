let menu = document.getElementById("menu")
let botaoMenu = document.getElementById("btn-menu")
let overflow = document.querySelector(".overflow")
let enviado = document.querySelector(".emailEnviado")
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
    enviado.classList.remove("abrir")
})

let p = document.getElementById("erro")

function enviar() {
    let nome = document.getElementById("nome")
    let email = document.getElementById("email")
    let msg = document.getElementById("msg")

    console.log(nome.value + email.value + msg.value)

    if ((nome.value != "") && (email.value != "") && (msg.value != "")) {

        for (var i = 0; i < email.value.length; i++) {
            if (email.value.charAt(i) == '@') {
                console.log(email.value.charAt[i + 1])
                enviado.classList.add("abrir")
            } else {
                p.innerHTML = "Digite um email correcto!"
            }
        }
    } else if ((nome.value != "") && (email.value == "") && (msg.value == "")) {
        p.innerHTML = "Digite um email e uma mensagem!"
    } else if ((nome.value != "") && (email.value != "") && (msg.value == "")) {
        p.innerHTML = "Digite a sua mensagem!"
    } else if ((nome.value != "") && (email.value == "") && (msg.value != "")) {
        p.innerHTML = "Digite um email!"
    } else if ((nome.value == "") && (email.value != "") && (msg.value != "")) {
        p.innerHTML = "Digite o seu nome"
    }else if ((nome.value == "") && (email.value == "") && (msg.value == "")) {
        p.innerHTML ="Digite o seu nome"
    }
}

function fechar() {
    enviado.classList.remove("abrir")
    nome.value = ""
    email.value = ""
    msg.value = ""
    p.innerHTML = ""


}
