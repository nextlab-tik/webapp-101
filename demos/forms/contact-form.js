// select html element by its id
let f = document.getElementById("form");
let b = document.getElementById("btn1");
// specify a function to call when form is about
// to submit data
f.addEventListener("submit", function() {
    let m = document.getElementById("mail");
    if (m.value == "admin@gmail.com") {
        alert("Hello admin");
    } else {
        alert("Hello user");
    }
});
let i = 0;
// specify function to exec wheb button is clicked
b.addEventListener("click", function() {
    console.log("btn clicked", i);
    i++;
});
