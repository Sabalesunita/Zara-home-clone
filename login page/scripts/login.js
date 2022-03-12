
import { navbar, footer } from "/Home/components/navbar.js"
console.log(navbar)
let nav_div = document.getElementById("nav-div");
 nav_div.innerHTML = navbar();



document.querySelector("form").addEventListener("submit", signin);
let rus = JSON.parse(localStorage.getItem("userItms"));
function signin(event) {
    event.preventDefault();

    let userem = document.querySelector("#email").value;
    let userpasswd = document.querySelector("#password").value;
    let flag = false;
    for (var i = 0; i < rus.length; i++) {
        if (rus[i].usermail == userem && rus[i].userpass == userpasswd) {
            flag = true;
        }
    }
    if (flag == true) {
        window.location.href = "/Home/index.html";
    }
    else {
        alert("Invalid Credentials")
    }
}

document.getElementById("container").addEventListener("click",close);
function close(){
        document.getElementById("login_container").style.display = "none";
}
