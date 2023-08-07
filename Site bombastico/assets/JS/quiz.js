const pergunta = document.querySelector(".pergunta")
const alternativas = document.querySelector(".alternativas")

const finalBom = document.querySelector("#bom")
const finalRuim = document.querySelector("#ruim")

const rPorcentagem = finalRuim.querySelector(".porcentagem")
const rErradas = finalRuim.querySelector(".erradas")
const rCertas = finalRuim.querySelector(".certas")

const bPorcentagem = finalBom.querySelector(".porcentagem")
const bErradas = finalBom.querySelector(".erradas")
const bCertas = finalBom.querySelector(".certas")

/* let btn = document.querySelector(".reset") */

async function main() {
    const requisicao = await fetch("assets/quiz.json")
    const quiz = await requisicao.json()
    
    
    let questaoAtual = 0
    let alternativaCorretaAtual
    let questoesCorretas = 0
    let questoesErradas = 0


    function porcentagem (x,y){
        return ((x/y)*100).toFixed(2)
    }

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
        const botaoCLicado = ev.target.closest("button")
        if (!botaoCLicado) return


        const arrayChildren = [...alternativas.children]
        const alternativaCorretaClicada = arrayChildren.indexOf(ev.target)
        /* if (alternativaCorretaClicada == alternativaCorretaAtual){
            questoesCorretas++          
            if(questaoAtual == quiz.length - 1){
                caixa.innerHTML = `<h2>Parabéns você completou o quiz!!!</h2> <h2>${questoesCorretas} Corretas<h2> <h2>${questoesErradas} Erradas<h2> <button id="reset">Reiniciar</button>`   
                return
            }
            return carregarAlternativa(++questaoAtual)
        }
        
         questoesErradas++
 */


        if (alternativaCorretaClicada == alternativaCorretaAtual){
            questoesCorretas++  
        }
        else{
            questoesErradas++
        }
        if(questaoAtual == quiz.length - 1){
            if(questoesCorretas >= questoesErradas){
                bPorcentagem.innerHTML = porcentagem(questoesCorretas,quiz.length) + "%"
                bErradas.innerHTML += questoesErradas
                bCertas.innerHTML += questoesCorretas
                finalBom.classList.add("open")
                return
            }   
            rPorcentagem.innerHTML = porcentagem(questoesCorretas,quiz.length) + "%"
            rErradas.innerHTML += questoesErradas
            rCertas.innerHTML += questoesCorretas
            finalRuim.classList.add("open")  
            return
        }
            carregarAlternativa(++questaoAtual)


            
        })

        carregarAlternativa(questaoAtual)
    }
    main ()
/*     function reset (){
        questaoAtual = 0
        questoesCorretas = 0
        questoesErradas = 0
        alternativaCorretaAtual = undefined
        finalBom.classList.remove("open")
        finalRuim.classList.remove("open")
        main()
    } */

