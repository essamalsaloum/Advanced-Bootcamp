//examples for usage of this and the apply, call and bind methods
//1. Convert an array like object into an array.
function arrayFrom(arrayLikeObject) {
    return [].slice.call(arrayLikeObject);
}

//2. Return the sum of only the even arguments
function sumEvenArguments() {
    let newArgs = [].slice.call(arguments);
    return newArgs.reduce(function (a, b) {
        if (b % 2 === 0) {
            return (a + b)
        }
        return a;
    }, 0);
}

//3. Should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function returns "Maxed Out"
function invokeMax(fn, num) {
    var max = 0;
    return function () {
        if (max >= num) return "Maxed Out!";
        max++;
        return fn.apply(this, arguments);
    }
}

//4. The function accepts two parameters, a function and a value for the keyword 'this'. Once returns a new function that can only be invoked once, with the value of the keyword this in the function set to be the second parameter 
function once(fn, thisArg) {
    var hasBeenCalled = false;
    return function () {
        if (!hasBeenCalled) {
            hasBeenCalled = true;
            return fn.apply(thisArg, arguments)
        }
    }
}

//5. "bind" accepts a function and a value for the keyword this. Bind returns a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this.
function bind(fn, thisArg) {
    var outerArgs = [].slice.call(arguments, 2)
    return function () {
        var innerArgs = [].slice.call(arguments)
        var allArgs = outerArgs.concat(innerArgs)
        return fn.apply(thisArg, allArgs)
    }
}

//6. Flip accepts a function and a value for the keyword this. Flip returns a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the arguments passed to the function reversed
function flip(fn, thisArg) {
    var outerArgs = [].slice.call(arguments, 2)
    return function () {
        var innerArgs = [].slice.call(arguments)
        var allArgs = outerArgs.concat(innerArgs).slice(0, fn.length)
        return fn.apply(thisArg, allArgs.reverse())
    }
}