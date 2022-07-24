let result = document.querySelector(".result");
let btn = document.querySelectorAll("button");
let clear = document.querySelector("#clear");

let initialValue = 0;
result.innerText = initialValue;

function handleClick(event) {
    if (event.target.classList.contains("equalto")) {
        result.innerText = eval(result.innerText);
        return;
    }
    if (result.innerText === "0") {
        result.innerText = event.target.dataset.text;

    } else {
        result.innerText += event.target.dataset.text;
    }
}

btn.forEach((b) => {
    b.addEventListener("click", handleClick);
});

clear.addEventListener("click", () => {
    result.innerText = initialValue;
});