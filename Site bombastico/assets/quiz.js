const pergunta = document.querySelector(".pergunta")
const alternativas = document.querySelector(".alternativas")


async function main() {
    const requisicao = await fetch("quiz.json")
    const quiz = await requisicao.json
    
    
    let questaoAtual = 0
    let alternativaCorretaAtual
    
    function carregarAlternativa(numeroDaAlternativa) {
        const alt = quiz[numeroDaAlternativa]
        pergunta.innerHTML = alt.pergunta
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
        if (alternativaCorretaClicada == alternativaCorretaAtual)
            return carregarAlternativa(++questaoAtual)
        alert("errou seu miseravel filha d aputa nao merecedor da vida ,inutil")
    })
    
    carregarAlternativa(questaoAtual)
}
