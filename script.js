var close = document.getElementById("close");
var open = document.getElementById("open");
var side = document.getElementById("side");
open.onclick = () => {
    side.style.left = "0px";
}

close.onclick = () => {
    side.style.left = "-200px";
}
