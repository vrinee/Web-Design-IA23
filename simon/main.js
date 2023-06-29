let body = document.body
let genius = document.querySelector("div.genius")
let bts = genius.querySelectorAll("*:not(.pontuacao)")
let pontuacao = genius.querySelector(".pontuacao")
let sequencia = [RNGsus(),RNGsus()]
let clicksound = new Audio('click.mp3')
let horn = new Audio('horn.mp3')

let velocidade = 500

function RNGsus(){
return Math.floor(Math.random() * 4)
}

function ligar(item) {
  bts[item].classList.add("on")
}

function desligar(item) {
  bts[item].classList.remove("on")
}

function piscar(item) {
  ligar(item)
  clicksound.play()
  setTimeout(function () { desligar(item) }, velocidade)
}

function apresentarSequencia() {
  let index = 0
  let interval = null

  return new Promise((resolve, reject) => {
    function piscarCorAtual() {
      if (index >= sequencia.length) {
        clearInterval(interval)
        resolve()
        return
      }
      let atual = sequencia[index++]
      piscar(atual)
    }
    interval = setInterval(piscarCorAtual, velocidade + 300)
  })
}

let currentIndex = 0

genius.addEventListener("click", (ev) => {
  clicksound.play()
  if (estado != "jogando") 
    return

  const buttonIndex = [...bts].indexOf(ev.target)

/*   switch(buttonIndex){
    case 0 :
      body.classList.add("verde")
      break
    case 1 :
      body.classList.add("azul")
      break
    case 2 :
      body.classList.add("vermelho")
      break
    case 3 :
      body.classList.add("amarelo")
      break
  } */

  if (buttonIndex < 0)
    return

  if (buttonIndex != sequencia[currentIndex++]) {
    pontuacao.innerHTML = "PERDEU!"
    estado = "apresentando sequencia"
    horn.play()
    pontuacao.classList.add("perdeu")
    body.classList.add("perdeu")
    setTimeout(() => {
      pontuacao.classList.remove("perdeu")
      body.classList.remove("perdeu")
      pontuacao.innerHTML = "Iniciar"
    },3000)
    return
  }

  if (currentIndex == sequencia.length) {
    estado = "apresentando sequencia"
    currentIndex = 0
    iniciar()
    return
  }
})

let estado = "apresentando sequencia"

async function iniciar() {
    sequencia.push(RNGsus())
    if (estado == "apresentando sequencia") {
        estado = "..."
        pontuacao.innerHTML = "..."
        await apresentarSequencia()
        estado = "jogando"
        pontuacao.innerHTML = "Jogue"
        return
    }
}

pontuacao.addEventListener("click", 
                            function () {
                                      pontuacao.classList.remove("perdeu")
                                      body.classList.remove("perdeu")
                                      iniciar()
                                        }
)