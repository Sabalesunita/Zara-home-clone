import { navbar, footer } from "/Home/components/navbar.js"
console.log(navbar)
let nav_div = document.getElementById("nav-div");
nav_div.innerHTML = navbar();

let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

import { newIn, dropdown, Living, Bathroom, Clothing, Dining, Kids, Info, Stories } from "/Home/scripts/index.js";
document.getElementById("newin-btn").addEventListener("click", newIn);
document.getElementById("bedroom-btn").addEventListener("click", dropdown)
document.getElementById("clothing-btn").addEventListener("click", Clothing)
document.getElementById("living-btn").addEventListener("click", Living)
document.getElementById("dinig-btn").addEventListener("click", Dining)
document.getElementById("bathroom-btn").addEventListener("click", Bathroom)
document.getElementById("kids-btn").addEventListener("click", Kids)
document.getElementById("stories-btn").addEventListener("click", Stories)
document.getElementById("info-btn").addEventListener("click", Info)


document.getElementById("newin").style.display="none";
document.getElementById("bedroom").style.display="none";
document.getElementById("clothing").style.display="none";
document.getElementById("living").style.display="none";
document.getElementById("dinig").style.display="none";
document.getElementById("bathroom").style.display="none"
document.getElementById("kids").style.display="none";
document.getElementById("stories").style.display="none";
document.getElementById("info").style.display="none"

newIn();
dropdown();
Living();
Bathroom();
Clothing();
Dining();
Kids();
Info();
Stories();