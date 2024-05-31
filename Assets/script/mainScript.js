let menu = document.getElementById("menu")
let botaoMenu = document.getElementById("btn-menu")
let overflow = document.querySelector(".overflow")

botaoMenu.addEventListener("click",function(){
    menu.classList.add("abrir")
    overflow.classList.add("abrir")
})

menu.addEventListener("click",function(){
    menu.classList.remove("abrir")
    overflow.classList.remove("abrir")
})


overflow.addEventListener("click",function(){
    menu.classList.remove("abrir")
    overflow.classList.remove("abrir")
})



