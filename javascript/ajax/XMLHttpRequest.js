const XHR = new XMLHttpRequest();

XHR.onreadystatechange = function () {
    XHR.readyState == 4 && XHR.status == 200 ?
        console.log(XHR.responseText) :
        console.log("Problemo!");
};

XHR.open("GET", "https://api.github.com/zen");
XHR.send();