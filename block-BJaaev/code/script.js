let form = document.querySelector("form");
let ul = document.querySelector("ul");
let input = document.querySelector(".new-todo");
// let active = document.querySelector(".active");
// let completed = document.querySelector(".completed");
let all = document.getElementById("all")
let active = document.getElementById("active")
let complete = document.getElementById("complete")
let alltodo = [];

function handler(event) {
    alltodo = [];
    event.preventDefault();

    let movie = event.target.value
        // console.log(movie);
    if (event.keyCode === 13) {
        let todu = {
            name: event.target.value,
            completed: false

        }
        alltodo.push(todu);
        // console.log(alltodo);
        // 
        event.target.value = "";
        input.value = "";
        // ul.innerHTML = "";

        showAllData();
    }





}


function showAllData() {
    // ul.innerHTML = "";
    alltodo.forEach(todo => {
        createUI(todo);

    });
}

function showActiveData() {
    // ul.innerHTML = "";
    alltodo.forEach(todo => {
        if (todo.completed == false) createUI(todo);
    });
}

function showCompleteData() {
    // ul.innerHTML = "";
    alltodo.forEach(todo => {

        if (todo.completed == true) createUI(todo);

    });
}
all.addEventListener("click", function(e) {
    e.preventDefault();
    showAllData()
});
active.addEventListener("click", function(e) {
    e.preventDefault();
    showAllData()
});
complete.addEventListener("click", function(e) {
    e.preventDefault();
    showAllData()
});

function createUI(todo) {
    // let movie = event.target.elements.moviename.value;
    let li = document.createElement("li");
    li.classList.add("flex");
    let input2 = document.createElement("input");
    input2.classList.add("checkbox");
    input2.type = "checkbox";
    input2.checked = todo.completed;

    let p = document.createElement("p");
    p.innerText = todo.name;
    let span = document.createElement("span");
    span.innerText = "X";
    span.addEventListener("click", function() {
        let index = alltodo.indexOf(todo);
        alltodo.splice(index, 1);
        showAllData();
    });
    li.append(input2, p, span);
    ul.append(li);
    return li;
}


form.addEventListener("keyup", handler);
form.addEventListener("submit", (e) => {
    e.preventDefault();
});