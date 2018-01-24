const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const xhrBtn = document.querySelector("#xhr")
const quoteText = document.querySelector("#quote")
//XHR 
xhrBtn.addEventListener("click", function () {
    const XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            let quote = JSON.parse(XHR.responseText)[0];
            quoteText.innerText = quote;
        }
    }
    XHR.open("GET", url);
    XHR.send();
}) //End XHR
//Fetch
const fetchBtn = document.querySelector("#fetch")

fetchBtn.addEventListener("click", function () {
    fetch(url)
        .then(handleErrorsF)
        .then(parseJson)
        .then(changeThings)
        .catch(printError());
});

function handleErrorsF(request) {
    if (!request.ok) {
        throw Error(request.status);
    }
    return request;
}

function parseJson(request) {
    let data = request.json();
    return data;
}

function changeThings(data) {
    quoteText.innerText = data[0];
}

function printError(error) {
    if (error) {
        console.log(error);
    }
} //End Fetch
//jQuery
$("#jquery").click(function () {
    $.getJSON(url)
        .done(changeThings) //recycling fetch function
        .fail(function () {
            alert("JSON Error!")
        })
}); //End jQuery
//axios
const axBtn = document.getElementById("axios");

axBtn.addEventListener("click", function () {
    axios.get(url)
        .then(changeQuote)
        .catch(handleErrors)
});

function changeQuote(res) {
    quote.innerText = res.data[0];
}

function handleErrors(err) {
    if (err.response) {
        alert("Problem With Response ", err.response.status);
    } else if (err.request) {
        alert("Problem With Request!");
    } else {
        alert('Error', err.message);
    }
} //end axios