let form = document.querySelector("form");
let fontLayout = document.querySelector(".font-layout");
let modal = document.querySelector(".modal");
let modalInfo = document.querySelector(".modalInfo");


let userInfo = {};

function handleSubmit(event) {
    event.preventDefault();
    fontLayout.setAttribute("style", "display: none");

    let elements = event.target.elements;
    userInfo.name = elements.name.value;
    userInfo.email = elements.email.value;
    userInfo.gender = elements.gender.value;
    userInfo.color = elements.color.value;
    userInfo.range = elements.range.value;
    userInfo.drone = elements.drone.value;
    userInfo.terms = elements.terms.checked;
    modal.classList.add("open");
    let close = document.querySelector(".modal-Close");
    close.addEventListener("click", () => {
        modal.classList.remove("open");
        fontLayout.setAttribute("style", "display: block");
    });
    modalData(userInfo);
}

form.addEventListener("submit", handleSubmit);


function modalData(data) {
    // console.log(data.name);
    modalInfo.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.innerText = `Hello ${data.name}`;
    let email = document.createElement("p");
    email.innerText = `Email: ${data.email}`;
    let choice = document.createElement("p");
    choice.innerText = `You Love: ${data.gender}`;
    let color = document.createElement("p");
    color.innerText = `Color: ${data.color}`;
    let range = document.createElement("p");
    range.innerText = `Range: ${data.name}`;
    let genre = document.createElement("p");
    genre.innerText = `Book Genre: ${data.drone}`;
    let terms = document.createElement("p");
    terms.innerText =
        `${
        data.terms
          ? "You agree to term and condition"
          : "You don't agree to term and condition"
      }`;
    modalInfo.append(h1, email, choice, color, range, genre, terms);
}