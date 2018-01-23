const btn = document.querySelector("#btn");
const price = document.getElementById("price");

function btcPrice() {
    const XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            const url = JSON.parse(XHR.responseText).bpi.EUR.rate;
            const url1 = JSON.parse(XHR.responseText).bpi.USD.rate;
            price.innerText = url + " EUR / " + url1 + " USD";
        }
    };

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice/eur");
    XHR.send();
}

document.addEventListener("DOMContentLoaded", btcPrice()); //show price when document is "ready"
btn.addEventListener("click", btcPrice); //refresh price on click
let priceRefresh = window.setInterval(btcPrice, 120000); //refresh price every 2min