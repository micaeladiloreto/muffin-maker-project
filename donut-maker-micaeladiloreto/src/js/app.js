let muffinButton = document.images["muffinButton"];
muffinButton.addEventListener("click", addMuffin);

muffinButton.addEventListener("click", enableAutoClicker)
muffinButton.addEventListener("click", enableMultiplier)

let muffinNumber = document.querySelector(".muffin-count");

let purchaseAutoClickerButton = document.querySelector(".clickerButton");
purchaseAutoClickerButton.addEventListener("click", purchaseAutoClicker);

let autoClickerPriceSpan = document.querySelector("#ac-cost");
let autoClickerSpan = document.querySelector("#clickersPurchased");

let purchaseClickMultiplierButton = document.querySelector(".multiplierButton");
purchaseClickMultiplierButton.addEventListener("click", purchaseClickMultiplier);

let clickMultiplierPriceSpan = document.querySelector("#multiplier-cost");
let clickMultiplierSpan = document.querySelector("#multipliersPurchased");

let nav = document.querySelector("nav");

let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetGame);

// collapsible nav bar
let coll = document.getElementsByClassName("collapsible");
let i;
for(i = 0; i < coll.length; i++){
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else{
            content.style.display = "block";
        }
    });
}




