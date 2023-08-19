
/*menu desaparecer*/

var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu").style.top = "0";
  } else {
    document.getElementById("menu").style.top = "-15vh";
  }
  prevScrollpos = currentScrollPos;
}

/*-----------------------------------*/

/*modal/Easter Egg*/

let modal = document.querySelector("div.modal")
let close = modal.querySelector("button.close")
let open = document.getElementById("easteregg")

  
open.addEventListener('click', () => {
  modal.classList.add("open")
})

close.addEventListener('click', () => {
  modal.classList.remove("open")
})

modal.addEventListener('click', (evt) => {
  if (evt.target.classList.contains("modal")) {
    modal.classList.remove("open")
  }
})

