let game = document.querySelector(".game");
let board = game.querySelectorAll(".user-game");
let selected = game.querySelector(".selected");
let selectedComp = game.querySelector(".selected-comp");
let compBoard = game.querySelectorAll(".comp-game");
let load = game.querySelector(".reload");
let count = game.querySelector(".count");
let countComp = game.querySelector(".count-comp");
let userRock = game.querySelector(".user-rock");
let userPaper = game.querySelector(".user-paper");
let userScissor = game.querySelector(".user-scissor");
let compRock = game.querySelector(".comp-rock");
let compPaper = game.querySelector(".comp-paper");
let h2 = game.querySelector("h2");
let compScissor = game.querySelector(".comp-scissor");
count.innerText = 0;
countComp.innerText = 0;


board.forEach((game) => {
    game.addEventListener("click", (event) => {
        selected.style.color = "#228EFA";
        selectedComp.style.color = "red";
        if (event.target.classList.contains("user-rock")) {
            userPaper.style.color = "#228EFA";
            userScissor.style.color = "#228EFA";
            event.target.style.color = "black";
            selected.innerText = " --- Rock";
        } else if (event.target.classList.contains("user-paper")) {
            userRock.style.color = "#228EFA";
            userScissor.style.color = "#228EFA";
            event.target.style.color = "black";
            selected.innerText = " --- Paper";
        } else if (event.target.classList.contains("user-scissor")) {
            userRock.style.color = "#228EFA";
            userPaper.style.color = "#228EFA";
            event.target.style.color = "black";
            selected.innerText = " --- Scissor";
        }



        load.addEventListener("click", function() {
            count.innerText = 0;
            countComp.innerText = 0;
            selected.innerText = "";
            selectedComp.innerText = "";
            h2.innerText = "";
            event.target.style.color = "#065a14";
            compRock.style.color = "rgb(75, 5, 65)";
            compPaper.style.color = " rgb(75, 5, 65)";
            compScissor.style.color = " rgb(75, 5, 65)";
        });


        if (Math.floor(Math.random() * 50) > 35) {
            compScissor.style.color = "red";
            compPaper.style.color = "red";
            compRock.style.color = "black";
            selectedComp.innerText = " --- Rock";
        } else if (Math.floor(Math.random() * 50) > 15 ||
            Math.floor(Math.random() * 50) < 35) {
            compScissor.style.color = "red";
            compRock.style.color = "red";
            compPaper.style.color = "black";
            selectedComp.innerText = " --- Paper";
        } else if (Math.floor(Math.random() * 50) > 0) {
            compRock.style.color = "red";
            compPaper.style.color = "red";
            compScissor.style.color = "black";
            selectedComp.innerText = " --- Scissor";
        } else {}

        if (userRock.style.color == compRock.style.color) {
            h2.innerText = "it's a tie!";
            return;
        } else if (userRock.style.color == compPaper.style.color) {
            h2.innerText = "you lost!";
            countComp.innerText = +(countComp.innerText) + 1;
            return;
        } else if (userRock.style.color == compScissor.style.color) {
            h2.innerText = "you win!";
            count.innerText = +(count.innerText) + 1;
            return;
        } else if (userPaper.style.color == compRock.style.color) {
            h2.innerText = "you win!";
            count.innerText = +(count.innerText) + 1;
            return;
        } else if (userPaper.style.color == compPaper.style.color) {
            h2.innerText = "it's a tie!";
            return;
        } else if (userPaper.style.color == compScissor.style.color) {
            h2.innerText = "you lost!";
            countComp.innerText = +(countComp.innerText) + 1;
            return;
        } else if (userScissor.style.color == compRock.style.color) {
            h2.innerText = "you lost!";
            countComp.innerText = +(countComp.innerText) + 1;
            return;
        } else if (userScissor.style.color == compScissor.style.color) {
            h2.innerText = "it's a tie!";
            return;
        } else if (userScissor.style.color == compPaper.style.color) {
            h2.innerText = "you win!";
            count.innerText = +(count.innerText) + 1;
            return;
        } else {}

    });
});