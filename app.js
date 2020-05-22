let btnRed = document.getElementById("btnRed");
let btnGreen = document.getElementById("btnGreen");
let btnBlue = document.getElementById("btnBlue");
let body = document.querySelector("body");

btnRed.addEventListener("click", () => {
    body.style.backgroundColor = "red";
    localStorage.setItem("color", "red");
})

btnBlue.addEventListener("click", () => {
    body.style.backgroundColor = "blue";
    localStorage.setItem("color", "blue");
})

btnGreen.addEventListener("click", () => {
    body.style.backgroundColor = "green";
    localStorage.setItem("color", "green");
})


storedColor = localStorage.getItem("color");
body.style.backgroundColor = storedColor;