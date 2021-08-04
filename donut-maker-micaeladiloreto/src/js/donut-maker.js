let muffinCount = 0;

let autoClickerPrice = 100;
let autoClickerCount = 0;

let clickMultiplierPrice = 10;
let clickMultiplierCount = 0;

function getMuffinCount() {
    return muffinCount;
}

function addMuffin() {
    muffinCount += Math.pow(1.2, clickMultiplierCount);
    muffinNumber.innerText = numberWithCommas(Math.round(muffinCount));
}

function activateAutoClickers() {
    setInterval(function() {
        muffinCount += autoClickerCount * Math.pow(1.2, clickMultiplierCount); 
        muffinNumber.innerText = numberWithCommas(Math.round(muffinCount));
    }, 1000);
}

function getAutoClickerCount() {
    return autoClickerCount;
}

function purchaseAutoClicker() {
    if(muffinCount >= autoClickerPrice) {
        muffinCount -= autoClickerPrice; 
        autoClickerCount += 1; 
        autoClickerPrice = Math.round(autoClickerPrice * 1.10); 
        muffinNumber.innerText = numberWithCommas(Math.round(muffinCount));
        autoClickerPriceSpan.innerText = numberWithCommas(autoClickerPrice);
        autoClickerSpan.innerText = numberWithCommas(autoClickerCount);
        if(autoClickerCount <= 1) {
            activateAutoClickers();
        }
    } 
}

function enableMultiplier(){
    if(muffinCount >= clickMultiplierPrice){
        purchaseClickMultiplierButton.removeAttribute("disabled")
    } else{
        purchaseClickMultiplierButton.disabled = true;
    }
}

function enableAutoClicker(){
    if(muffinCount >= autoClickerPrice){
        purchaseAutoClickerButton.removeAttribute("disabled")
        } else{
        purchaseAutoClickerButton.disabled = true;
        }
}

function purchaseClickMultiplier() {
    if(muffinCount >= clickMultiplierPrice) {
        muffinCount -= clickMultiplierPrice; 
        clickMultiplierCount += 1; 
        clickMultiplierPrice = Math.round(clickMultiplierPrice * 1.10); 
        muffinNumber.innerText = numberWithCommas(Math.round(muffinCount));
        clickMultiplierPriceSpan.innerText = numberWithCommas(clickMultiplierPrice);
        clickMultiplierSpan.innerText = numberWithCommas(clickMultiplierCount);
    } 
}

function getClickMultiplierCount() {
    return clickMultiplierCount;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function resetGame() {
    location.reload();
}
