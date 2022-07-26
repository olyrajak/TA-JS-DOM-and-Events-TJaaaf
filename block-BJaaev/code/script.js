let form = document.querySelector("form");
let ul = document.querySelector("ul");
let input = document.querySelector(".new-todo");

function handler(event) {
    event.preventDefault();
    console.log(event);
    ul.innerHTML = "";
    let movie = event.target.elements.moviename.value;
    let li = document.createElement("li");
    li.classList.add("flex");
    let input2 = document.createElement("input");
    input2.classList.add("checkbox");
    input2.type = "checkbox";
    let p = document.createElement("p");
    p.innerText = movie;
    let span = document.createElement("span");
    span.innerText = "X";
    li.append(input2, p, span);
    ul.append(li);
    input.value = "";
    span.addEventListener("click", () => {
        span.parentElement.remove();
    });
    input2.addEventListener("click", () => {
        if (input2.checked) {
            p.classList.add("complete");
        } else {
            p.classList.remove("complete");
        }
    });

}

form.addEventListener("submit", handler);