
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
