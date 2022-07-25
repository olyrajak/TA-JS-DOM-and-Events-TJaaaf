let form = document.querySelector("form");
let button = document.querySelector("button");;
let fontLayout = document.querySelector(".font-layout");
let nameError, userNameError, passwordError, emailError, phoneNumberError = "";

function number(string) {
    return string.split("").some((e) => Number(e));
}

function handleSubmit(event) {
    event.preventDefault();
    console.log(event);

    let elements = event.target.elements;
    let name = elements.name;
    let username = elements.username;
    let email = elements.email;
    let pswd = elements.pswd;
    let cPswd = elements.cPswd;
    let phoneNumber = elements.phoneNumber;

    let parentElm1 = name.parentElement;
    let parentElm2 = username.parentElement;
    let parentElm6 = email.parentElement;
    let parentElm3 = cPswd.parentElement;
    let parentElm4 = pswd.parentElement;
    let parentElm5 = phoneNumber.parentElement;

    if (number(name.value)) {
        parentElm1.classList.add('error');
        nameError = "Name can't be numbers";
    } else if (name.value == "") {
        parentElm1.classList.add('error');
        nameError = "Name Can't be empty";

    } else {
        nameError = "";
        parentElm1.classList.remove('error');
        parentElm1.classList.add('success');

    }
    if (!email.value.includes("@")) {
        emailError = "Email must contain the symbol @";
        parentElm6.classList.add('error');

    } else if (email.value.length < 6) {
        emailError = "Email must be at least 6 characters";
        parentElm6.classList.add('error');

    } else {
        emailError = "";
        parentElm6.classList.add('success');
        parentElm6.classList.remove('error');
    }
    if (username.value.length < 4) {
        parentElm2.classList.add('error');
        userNameError = "Username can't be less than 4 characters";
    } else {
        parentElm2.classList.add('success');
        parentElm2.classList.remove('error');
        userNameError = "";
    }



    if (pswd.value != cPswd.value) {
        parentElm3.classList.add('error');
        parentElm4.classList.add('error');
        passwordError = "Password And Confirm Password must be Same";

    } else {
        parentElm3.classList.add('success');
        parentElm3.classList.remove('error');
        parentElm4.classList.add('success');
        parentElm4.classList.remove('error');
        passwordError = "";
    }
    if (!number(phoneNumber.value)) {
        parentElm5.classList.add('error');
        phoneNumberError = "Phone numbers can only be a number";
    } else if (phoneNumber.value.length < 7) {
        parentElm5.classList.add('error');
        phoneNumberError = "Length of phone number can't be less than 7";
    } else {
        parentElm5.classList.add('success');
        parentElm5.classList.remove('error');
        phoneNumberError = "";

    }
    if (phoneNumber.value.length < 7 ||
        username.length < 4 ||
        !number(phoneNumber.value) ||
        number(name.value) ||
        !email.value.includes("@") ||
        email.value.length < 6 ||
        pswd.value != cPswd.value) {

    } else {
        alert("User Added Successfully!");
        location.reload();
    }

    name.nextElementSibling.innerText = nameError;
    username.nextElementSibling.innerText = userNameError;
    cPswd.nextElementSibling.innerText = passwordError;
    pswd.nextElementSibling.innerText = passwordError;
    phoneNumber.nextElementSibling.innerText = phoneNumberError;
    email.nextElementSibling.innerText = emailError;

}

form.addEventListener("submit", handleSubmit);