// 1. There are two boxes each box contains 12 small boxes
// 2. When you click on the small boxes it will show the number from 1 to 12 and disappear in next 5 seconds
// 3. In first box do it using multiple event listeners
// 4. In second box do it using event delegation
let leftOne = document.querySelectorAll(".box-one");

leftOne.forEach((elm) => {
    elm.addEventListener("click", (event) => {
        if (event.target.classList.contains("box-one")) {
            event.target.innerText = event.target.dataset.num;
            setTimeout(() => {
                event.target.innerText = "";
            }, 5000);
        }
    });
});

let right = document.querySelector(".right");
right.addEventListener("click", (event) => {
    if (event.target.classList.contains("box-two")) {
        event.target.innerText = event.target.dataset.num;
        setTimeout(() => {
            event.target.innerText = "";
        }, 5000);
    }
});