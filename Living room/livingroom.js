var data = [
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2022/V/4/1/p/1550/031/802/1550031802_7_1_3.jpg?t=1642585455406",
        name:"COTTON POUFFE",
        price:"99.99 € ",
       
    },
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2022/V/4/1/p/1550/031/737/1550031737_7_1_3.jpg?t=1642585455352",
        name:"COTTON POUFFE",
        price:"99.99 € ",
       
    },
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2022/V/4/1/p/3137/073/712/3137073712_7_1_3.jpg?t=1644939786094",
        name:"FAUX SHEARLING ARMCHAIR",
        price:"199.99 € ",
       
    },
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2022/V/4/1/p/4118/072/251/4118072251_7_1_3.jpg?t=1642585743994",
        name:"MARBLE SIDE TABLE",
        price:"79.99 € ",
       
    },

    {
        imgUrl:"https://static.zarahome.net/8/photos4/2022/V/4/1/p/4118/072/733/4118072733_7_1_3.jpg?t=1642610827328",
        name:"MARBLE SIDE TABLE",
        price:"79.99 € ",
       
    }]


    data.map(function(elem){
    
        var living_card = document.createElement("div");
         var living_card_div = document.createElement("div");
         var card = document.createElement("div");
         living_card_div.style.backgroundImage = `url(${elem.imgUrl})`;
         living_card_div.id = "buttondiv";
        // var image = document.createElement("img");
        // image.setAttribute("src", elem.imgUrl);
    
        var button = document.createElement("button");
        button.textContent = "Add to Basket";
    
        var item_name = document.createElement("p");
        item_name.textContent = elem.name;
    
        var price = document.createElement("p");
        price.innerHTML = elem.price;
    
    
        living_card.append(item_name,price);
        living_card_div.append(button,living_card);
        card.append(living_card_div,living_card);
        document.querySelector("#livecontainer").append(card);
    
    });
    

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

        // export {newIn,dropdown,Living,Bathroom,Clothing,Dining,Kids,Info,Stories};
    