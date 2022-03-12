import { navbar, footer } from "/Home/components/navbar.js"
        console.log(navbar)
        let nav_div = document.getElementById("nav-div");
         nav_div.innerHTML = navbar();
    
        let footer_div = document.getElementById("footer");
        footer_div.innerHTML = footer();
    
    
        document.getElementById("newin-btn").addEventListener("click", newIn)
        function newIn() {
            if (document.getElementById("newin").style.display == "block") {
                document.getElementById("newin").style.display = "none";
            }
            else {
                document.getElementById("newin").style.display = "block";
            }
        }
    
        document.getElementById("bedroom-btn").addEventListener("click", dropdown)
        function dropdown() {
            if (document.getElementById("bedroom").style.display == "block") {
                document.getElementById("bedroom").style.display = "none";
            }
            else {
                document.getElementById("bedroom").style.display = "block";
            }
        }
        document.getElementById("clothing-btn").addEventListener("click", Clothing)
        function Clothing() {
            if (document.getElementById("clothing").style.display == "block") {
                document.getElementById("clothing").style.display = "none";
            }
            else {
                document.getElementById("clothing").style.display = "block";
            }
        }
        document.getElementById("living-btn").addEventListener("click", Living)
        function Living() {
            if (document.getElementById("living").style.display == "block") {
                document.getElementById("living").style.display = "none";
            }
            else {
                document.getElementById("living").style.display = "block";
            }
        }
    
        document.getElementById("dinig-btn").addEventListener("click", Dining)
        function Dining() {
            if (document.getElementById("dining").style.display == "block") {
                document.getElementById("dining").style.display = "none";
            }
            else {
                document.getElementById("dining").style.display = "block";
            }
        }
        document.getElementById("bathroom-btn").addEventListener("click", Bathroom)
        function Bathroom() {
            if (document.getElementById("bathroom").style.display == "block") {
                document.getElementById("bathroom").style.display = "none";
            }
            else {
                document.getElementById("bathroom").style.display = "block";
            }
        }
    
        document.getElementById("kids-btn").addEventListener("click", Kids)
        function Kids() {
            if (document.getElementById("kids").style.display == "block") {
                document.getElementById("kids").style.display = "none";
            }
            else {
                document.getElementById("kids").style.display = "block";
            }
        }
        document.getElementById("stories-btn").addEventListener("click", Stories)
        function Stories() {
            if (document.getElementById("stories").style.display == "block") {
                document.getElementById("stories").style.display = "none";
            }
            else {
                document.getElementById("stories").style.display = "block";
            }
        }
        document.getElementById("info-btn").addEventListener("click", Info)
        function Info() {
            if (document.getElementById("info").style.display == "block") {
                document.getElementById("info").style.display = "none";
            }
            else {
                document.getElementById("info").style.display = "block";
            }
        }

        export {newIn,dropdown,Living,Bathroom,Clothing,Dining,Kids,Info,Stories};