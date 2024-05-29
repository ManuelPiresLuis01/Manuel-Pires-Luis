let cont = 0;
document.querySelector(".contador").innerHTML = cont

/* efeito do carregamento da pagina */

parar = setInterval(function () {
    cont++
    document.querySelector(".contador").innerHTML = cont
    if (cont == 100) {
        clearInterval(parar)
        document.querySelector(".loading").classList.add("fechar")
        document.querySelector(".aparecer").classList.add("fechar")
        var apresentacao = `Ola, eu sou o Manuel Pires Luís`
        var apresentacao1 = `Desenvolvedor Front-End,`
        var apresentacao2 = `Professor e Freelancer!`
        var i = 0
        document.getElementById("presentation").innerHTML = ""
        document.getElementById("presentation1").innerHTML = ""
        document.getElementById("presentation2").innerHTML = ""

        parar1 = setInterval(function () {
            document.getElementById("presentation").innerHTML += apresentacao.charAt(i)
            i++
            if (i == apresentacao.length) {
                clearInterval(parar1)
                i = 0
                parar1 = setInterval(function () {
                    document.getElementById("presentation1").innerHTML += apresentacao1.charAt(i)
                    i++
                    if (i == apresentacao1.length) {
                        clearInterval(parar1)
                        i = 0
                        parar1 = setInterval(function () {
                            document.getElementById("presentation2").innerHTML += apresentacao2.charAt(i)
                            i++
                            if (i == apresentacao2.length) {
                                clearInterval(parar1)
                            }
                        }, 50)
                    }
                }, 50)
            }
        }, 50)
    }
}, 50)

/*fim do efeito do carregamento da pagina */



