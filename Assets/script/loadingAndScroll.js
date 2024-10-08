let cont = document.querySelector(".contador")
var contador = 0

parar = setInterval(function () {
    cont.innerHTML = contador
    contador++
    if (contador == 100) {
        clearInterval(parar)
        document.querySelector(".loading").classList.add("fechar")
        first()
    }

},50)
window.revelar = ScrollReveal({ reset: true })
function first() {/*
    revelar.reveal('.img', {
        duration: 500,
        distance: '90px'
    })*/

    
    revelar.reveal('#presentation1', {
        duration: 500,
        distance: '90px',
        delay: 200
    })

    revelar.reveal('#presentation', {
        duration: 500,
        distance: '90px',
        delay: 250
    })

    revelar.reveal('.r1', {
        duration: 200,
        distance: '90px',
        delay: 500,
        origin: 'right'
    })

    revelar.reveal('.r2', {
        duration: 200,
        distance: '90px',
        delay: 600,
        origin: 'right'
    })
    revelar.reveal('.r3', {
        duration: 200,
        distance: '90px',
        delay: 700,
        origin: 'right'
    })
    revelar.reveal('.r4', {
        duration: 200,
        distance: '90px',
        delay: 800,
        origin: 'right'
    })
    revelar.reveal('.r5', {
        duration: 200,
        distance: '90px',
        delay: 900,
        origin: 'right'
    })

    revelar.reveal('.btn', {
        duration: 200,
        distance: '90px',
        delay: 1000
    })
}
/**efeito scroll de reveal do sobre */

revelar.reveal('.about-me', {
    duration: 500,
    distance: '50px',
})

revelar.reveal('.photo', {
    duration: 500,
    distance: '50px',
    delay:100
})

revelar.reveal('.bxl-html5', {
    duration: 500,
    distance: '50px',
    delay: 100
})
revelar.reveal('.bxl-css3', {
    duration: 500,
    distance: '50px',
    delay: 200
})
revelar.reveal('.bxl-javascript', {
    duration: 500,
    distance: '50px',
    delay: 300
})
revelar.reveal('.bxl-java', {
    duration: 500,
    distance: '50px',
    delay: 400
})
revelar.reveal('.bxl-bootstrap', {
    duration: 500,
    distance: '50px',
    delay: 500
})

revelar.reveal('.bxl-php', {
    duration: 500,
    distance: '50px',
    delay: 550
})

revelar.reveal('.bxl-react', {
    duration: 500,
    distance: '50px',
    delay: 600
})
revelar.reveal('.bxl-visual-studio', {
    duration: 500,
    distance: '50px',
    delay: 700
})

revelar.reveal('.bi-file-word', {
    duration: 500,
    distance: '50px',
    delay: 800
})

revelar.reveal('.bi-file-earmark-excel-fill', {
    duration: 500,
    distance: '50px',
    delay: 900
})

revelar.reveal('.bi-file-ppt-fill', {
    duration: 500,
    distance: '50px',
    delay: 1000
})

/*efeito scroll reveal nos titulos*/

revelar.reveal('.titulo', {
    duration: 500,
    distance: '90px'
})


/*efeito scroll reveal em oque faço*/
revelar.reveal('.oque-faco1', {
    duration: 300,
    distance: '90px',
    delay: 100
})
revelar.reveal('.oque-faco2', {
    duration: 300,
    distance: '90px',
    delay: 200
})
revelar.reveal('.oque-faco3', {
    duration: 300,
    distance: '90px',
    delay: 300
})

/**efeito scroll reveal dos projectos */
revelar.reveal('.proj1', {
    duration: 300,
    distance: '90px',
    delay: 100
})
revelar.reveal('.proj2', {
    duration: 300,
    distance: '90px',
    delay: 200
})
revelar.reveal('.proj3', {
    duration: 300,
    distance: '90px',
    delay: 300
})

/**efeito scroll reveal do projecto premiado */
revelar.reveal('.projp1', {
    duration: 300,
    distance: '90px',
    delay: 100
})

/**efeito scroll reveal das testemunhas */
revelar.reveal('.testemunha1', {
    duration: 300,
    distance: '90px',
    delay: 100
})
revelar.reveal('.testemunha2', {
    duration: 300,
    distance: '90px',
    delay: 200
})
revelar.reveal('.testemunha3', {
    duration: 300,
    distance: '90px',
    delay: 300
})
revelar.reveal('.testemunha4', {
    duration: 300,
    distance: '90px',
    delay: 400
})


revelar.reveal('.container', {
    duration: 300,
    distance: '90px',
    delay: 500
})

   

revelar.reveal('.bxs-envelope', {
    duration: 300,
    distance: '90px',
    delay: 550
})

revelar.reveal('.nome', {
    duration: 300,
    distance: '90px',
    delay: 600
})

revelar.reveal('.email', {
    duration: 300,
    distance: '90px',
    delay: 650
})

revelar.reveal('.msg', {
    duration: 300,
    distance: '90px',
    delay: 700
})

revelar.reveal('.enviar', {
    duration: 300,
    distance: '90px',
    delay: 750
})