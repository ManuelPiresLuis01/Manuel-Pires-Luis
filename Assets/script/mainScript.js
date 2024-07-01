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

