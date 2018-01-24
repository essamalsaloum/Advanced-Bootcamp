const btn = document.getElementById("footer");
let fullname = document.getElementById("fullname");
let username = document.getElementById("username");
let email = document.getElementById("email");
let city = document.getElementById("city");
let img = document.getElementById("avatar");

btn.addEventListener("click", function () {
    var url = "https://randomuser.me/api/";
    fetch(url)
        .then(handleErrors)
        .then(parseJson)
        .then(changeThings)
        .catch(printError());
});

function handleErrors(request) {
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
    const res = data.results[0];
    fullname.innerText = res.name.first + " " + res.name.last;
    username.innerText = res.login.username;
    email.innerText = res.email;
    city.innerText = res.location.city;
    img.src = res.picture.medium;
}

function printError(error) {
    if (error) {
        console.log(error);
    }
}