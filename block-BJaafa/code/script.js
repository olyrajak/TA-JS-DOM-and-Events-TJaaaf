function randomNumber(max) {
    return Math.round(Math.random() * max);
}

let parentBox = document.querySelector(".boxes");

for (let i = 0; i <= 35; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    let h3 = document.createElement("h3");
    let randomNum = randomNumber(32);
    h3.innerText = randomNum;
    div.append(h3);
    parentBox.append(div);
}
let allBoxes = document.querySelectorAll(".box");

parentBox.addEventListener("mousemove", handleMouseMovement);

function handleMouseMovement() {
    allBoxes.forEach((box) => {
        let color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
        box.style.backgroundColor = color;
        box.querySelector("h3").innerText = randomNumber(500);
    });
}