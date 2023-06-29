let tiles = document.querySelectorAll("div.jogo > *")
let grid  = document.querySelector("div.jogo")

grid.addEventListener("click",(ev) => {

    const tileIndex = [...tiles].indexOf(ev.target)
    let aux = 1

    if (aux == 1){
        tiles[tileIndex].innerHTML = "X" 
        console.log(aux) 
        aux ++

    }else{
        tiles[tileIndex].innerHTML = "O"
        aux --
    }
})
