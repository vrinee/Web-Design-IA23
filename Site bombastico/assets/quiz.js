const pergunta = document.querySelector(".pergunta")
const alternativas = document.querySelector(".alternativas")
const caixa = document.querySelector("#quiz > div")

async function main() {
    const requisicao = await fetch("assets/quiz.json")
    const quiz = await requisicao.json()
    
    
    let questaoAtual = 0
    let alternativaCorretaAtual
    
    function carregarAlternativa(numeroDaAlternativa) {
        const alt = quiz[numeroDaAlternativa]
        pergunta.innerHTML = (numeroDaAlternativa + 1) + '/' + quiz.length + '&emsp;' + alt.pergunta
        alternativaCorretaAtual = alt.correta
        alternativas.innerHTML = ""
        for (let i = 0; i <= 9 ;i++){
            alternativas.innerHTML += `<button>${alt.alternativas[i]}</button>`
        }
        
        /* quiz[0].alternativas.forEach(alt => alternativas.innerHTML += `<button>${alt}</button`); */
    
    }
    
    alternativas.addEventListener("click", ev => {
        const arrayChildren = [...alternativas.children]
        const alternativaCorretaClicada = arrayChildren.indexOf(ev.target)
        if (alternativaCorretaClicada == alternativaCorretaAtual){
            if(questaoAtual == quiz.length){
                caixa.innerHTML = '<h2>Parabéns você completou o quiz!!!</h2>'
                return
            }
    
            return carregarAlternativa(++questaoAtual)
        }

        alert("errou seu miseravel filha d aputa nao merecedor da vida ,inutil")
    })
    
    carregarAlternativa(questaoAtual)
}

main ()
