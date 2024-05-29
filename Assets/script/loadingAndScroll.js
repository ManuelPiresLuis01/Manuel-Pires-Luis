/**resetar*/
window.revelar = ScrollReveal({ reset: true })



/* efeito do carregamento da pagina */
let cont = 0
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


/*efeito scroll reveal do topo*/

revelar.reveal('.img', {
    duration: 500,
    distance: '90px'
})

revelar.reveal('#presentation', {
    duration: 500,
    distance: '90px',
    delay: 200
})

revelar.reveal('#presentation1', {
    duration: 1000,
    distance: '90px',
    delay: 300
})

revelar.reveal('#presentation2', {
    duration: 1500,
    distance: '90px',
    delay: 400

})

revelar.reveal('.r1', {
    duration: 200,
    distance: '90px',
    delay: 2000,
    origin: 'right'
})

revelar.reveal('.r2', {
    duration: 200,
    distance: '90px',
    delay: 2100,
    origin: 'right'
})
revelar.reveal('.r3', {
    duration: 200,
    distance: '90px',
    delay: 2200,
    origin: 'right'
})
revelar.reveal('.r4', {
    duration: 200,
    distance: '90px',
    delay: 2300,
    origin: 'right'
})
revelar.reveal('.r5', {
    duration: 200,
    distance: '90px',
    delay: 2400,
    origin: 'right'
})

revelar.reveal('.btn', {
    duration: 200,
    distance: '90px',
    delay: 2500
})


/**efeito scroll de reveal do sobre */

revelar.reveal('.about-me', {
    duration: 500,
    distance: '50px',
})

revelar.reveal('.bxl-html5', {
    duration: 500,
    distance: '50px',
    delay:100
})
revelar.reveal('.bxl-css3', {
    duration: 500,
    distance: '50px',
    delay:200
})
revelar.reveal('.bxl-javascript', {
    duration: 500,
    distance: '50px',
    delay:300
})
revelar.reveal('.bxl-java', {
    duration: 500,
    distance: '50px',
    delay:400
})
revelar.reveal('.bxl-bootstrap', {
    duration: 500,
    distance: '50px',
    delay:500
})
revelar.reveal('.bxl-react', {
    duration: 500,
    distance: '50px',
    delay:600
})
revelar.reveal('.bxl-visual-studio', {
    duration: 500,
    distance: '50px',
    delay:700
})

/*efeito scroll reveal nos titulos*/

revelar.reveal('.titulo',{
    duration:500,
    distance:'90px'
})


/*efeito scroll reveal em oque faço*/
revelar.reveal('.oque-faco1', {
    duration: 300,
    distance: '90px',
    delay:100
})
revelar.reveal('.oque-faco2', {
    duration: 300,
    distance: '90px',
    delay:200
})
revelar.reveal('.oque-faco3', {
    duration: 300,
    distance: '90px',
    delay:300
})

/**efeito scroll reveal dos projectos */
revelar.reveal('.proj1', {
    duration: 300,
    distance: '90px',
    delay:100
})
revelar.reveal('.proj2', {
    duration: 300,
    distance: '90px',
    delay:200
})
revelar.reveal('.proj3', {
    duration: 300,
    distance: '90px',
    delay:300
})

/**efeito scroll reveal do projecto premiado */
revelar.reveal('.projp1', {
    duration: 300,
    distance: '90px',
    delay:100
})

/*efeito scroll reveal do dashboard */
revelar.reveal('.cont1', {
    duration: 300,
    distance: '90px',
    delay:100
})
revelar.reveal('.cont2', {
    duration: 300,
    distance: '90px',
    delay:200
})

/**efeito scroll reveal dass testemunhas */
revelar.reveal('.testemunha1', {
    duration: 300,
    distance: '90px',
    delay:100
})
revelar.reveal('.testemunha2', {
    duration: 300,
    distance: '90px',
    delay:200
})
revelar.reveal('.testemunha3', {
    duration: 300,
    distance: '90px',
    delay:300
})
revelar.reveal('.testemunha4', {
    duration: 300,
    distance: '90px',
    delay:400
})


