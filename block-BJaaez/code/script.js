let form = document.querySelector("form");
let ul = document.querySelector("ul");

function handler(event) {
    event.preventDefault();
    console.log(event);

    let movie = event.target.elements.moviename.value;
    let li = document.createElement("li");
    li.innerText = movie;
    let span = document.createElement("span");
    span.innerText = "X";
    li.append("", span);
    ul.append(li);
    span.addEventListener("click", () => {
        span.parentElement.remove();
    });

}

form.addEventListener("submit", handler)