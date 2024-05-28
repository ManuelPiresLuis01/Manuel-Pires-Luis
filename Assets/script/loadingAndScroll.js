let cont = 0;
document.querySelector(".contador").innerHTML = cont
parar = setInterval(function () {
        cont++
        document.querySelector(".contador").innerHTML = cont
        if (cont == 100) {
            clearInterval(parar)
            document.querySelector(".loading").classList.add("fechar")
            document.querySelector(".aparecer").classList.add("fechar")
        }

}, 50)