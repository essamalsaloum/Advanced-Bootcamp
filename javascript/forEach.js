//normal for loop

var arr = [1, 2, 3, 4, 5, 6];

function double(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i] * 2);
    }
}
double(arr);

//forEach array method

arr.forEach(i => console.log(i * 2));

//forEach function call

var strings = ["my", "forEach", "example"];
var result = "";

forEach(strings, function (str, index, array) {
    if (array.length - 1 !== index) {
        result += str + " ";
    } else {
        result += str + "!!!";
    }
});

//forEach function

function forEach(arr, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(arr[i], i, arr);
    }
}