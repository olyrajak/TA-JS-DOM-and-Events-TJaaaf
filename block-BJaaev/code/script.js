let form = document.querySelector("form");
let ul = document.querySelector("ul");
let input = document.querySelector(".new-todo");
// let active = document.querySelector(".active");
// let completed = document.querySelector(".completed");
let all = document.getElementById("all")
let active = document.getElementById("active")
let complete = document.getElementById("complete")
let clear = document.getElementById("clear")
let alltodo = JSON.parse(localStorage.getItem("todos")) || [];

function handler(event) {
    // alltodo = [];
    event.preventDefault();

    let movie = event.target.value
        // console.log(movie);
    if (event.keyCode === 13) {
        let todo = {
            name: event.target.value,
            completed: false

        }
        alltodo.push(todo);
        // console.log(alltodo);
        // 
        event.target.value = "";
        // localStorage.setItem("todo", JSON.stringify(alltodo));


        showAllData(alltodo);
    }





}


function showAllData(todos) {
    console.log(todos);
    ul.innerHTML = "";
    todos.forEach(todo => {
        createUI(todo);


    });
}
all.addEventListener("click", () => {

    defaultSelected = "all";
    updateActiveButton();
    showAllData(alltodo);
});

clear.addEventListener("click", () => {
    let clear = alltodo.filter((todo) => todo.completed);
    defaultSelected = "clear";
    updateActiveButton();
    showAllData(clear);
});

active.addEventListener("click", () => {
    let notCompleted = alltodo.filter((todo) => todo.completed);

    defaultSelected = "active";
    updateActiveButton();
    // console.log(notCompleted);
    showAllData(notCompleted);
});

complete.addEventListener("click", () => {
    let completedArray = alltodo.filter((todo) => !todo.completed);
    defaultSelected = "completed";
    updateActiveButton();
    showAllData(completedArray);
});

function createUI(todos) {
    let li = document.createElement("li");
    li.classList.add("flex");
    let input2 = document.createElement("input");
    input2.classList.add("checkbox");
    input2.type = "checkbox";
    input2.checked = todos.completed;
    input2.addEventListener("click", function() {

        todos.completed = true;

        showAllData(alltodo);
    });
    let p = document.createElement("p");
    p.innerText = todos.name;
    let span = document.createElement("span");
    span.innerText = "X";
    span.addEventListener("click", function() {
        let index = alltodo.findIndex(t => t.name === alltodo.name);
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

function updateActiveButton(btn = defaultSelected) {
    all.classList.remove("selected");
    active.classList.remove("selected");
    complete.classList.remove("selected");


    if (btn === "all") {
        all.classList.add("selected");
    }
    if (btn === "active") {
        active.classList.add("selected");
    }
    if (btn === "complete") {
        complete.classList.add("selected");
    }
    if (btn === "clear") {
        clear.classList.add("selected");
    }
}