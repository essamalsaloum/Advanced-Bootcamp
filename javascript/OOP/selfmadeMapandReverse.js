// My own version of Array.prototype.map

Array.prototype.map = function (callback) {
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this))
    }
    return newArr;
}

// A function that reverses a string and place it on the String.prototype

String.prototype.reverse = function () {
    var newStr = '';
    for (var i = this.length - 1; i >= 0; i--) {
        newStr += this[i]
    }
    return newStr;
}