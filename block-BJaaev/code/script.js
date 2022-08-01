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
    // alltodo = [];
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

        showAllData(alltodo);
    }





}


function showAllData(todo_list) {
    // console.log(todo_list);
    ul.innerHTML = "";
    alltodo.forEach(todo_list => {
        createUI(todo_list);
        // console.log(todo);

    });
}

function showActiveData() {
    // ul.innerHTML = "";
    alltodo.forEach(todo => {
        if (todo.completed === false) createUI(todo);
        // console.log(todo)
    });
    // showAllData()
}

function showCompleteData() {
    ul.innerHTML = "";
    alltodo.forEach(todo => {
        console.log(todo);
        if (todo.completed === true)
            createUI(todo);

    });
    // showAllData()
}
// all.addEventListener("click", function(e) {
//     e.preventDefault();
//     showAllData()
// });
// active.addEventListener("click", function(e) {
//     e.preventDefault();
//     showActiveData()
// });
// complete.addEventListener("click", function(e) {
//     e.preventDefault();
//     showCompleteData()
// });
showAllData(alltodo);

all.addEventListener("click", () => {
    showAllData(alltodo);
    defaultSelected = "all";
    updateActiveButton();
});

// clear.addEventListener("click", () => {
//     alltodo = alltodo.filter((todo) => !todo.completed);
//     defaultSelected = "clear";
//     updateActiveButton();
//     showAllData(alltodo);
// });

active.addEventListener("click", () => {
    let notCompleted = alltodo.filter((todo) => !todo.completed);
    defaultSelected = "active";
    updateActiveButton();
    showAllData(notCompleted);
});

complete.addEventListener("click", () => {
    let completedArray = alltodo.filter((todo) => todo.completed);
    defaultSelected = "completed";
    updateActiveButton();
    showAllData(completedArray);
});

function createUI(todo) {

    let li = document.createElement("li");
    li.classList.add("flex");
    let input2 = document.createElement("input");
    input2.classList.add("checkbox");
    input2.type = "checkbox";
    input2.checked = todo.completed;
    input2.addEventListener("click", function() {
        todo.completed = true;

        console.log(todo);
        showAllData();
    });
    let p = document.createElement("p");
    p.innerText = todo.name;
    let span = document.createElement("span");
    span.innerText = "X";
    span.addEventListener("click", function() {
        let index = alltodo.findIndex(t => t.name === alltodo.name);
        // console.log(index);
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
    // clear.classList.remove("selected");

    if (btn === "all") {
        all.classList.add("selected");
    }
    if (btn === "active") {
        active.classList.add("selected");
    }
    if (btn === "complete") {
        complete.classList.add("selected");
    }
    // if (btn === "clear") {
    //     clear.classList.add("selected");
    // }
}