let one = document.querySelector(".first");
var two = document.querySelector(".second");


one.addEventListener("click", handleClick);
two.addEventListener("mousemove", handleMouseMove);

function handleClick() {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
    one.style.backgroundColor = color;
}

function handleMouseMove() {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
    two.style.backgroundColor = color;
}