//countdown function

function countdown(time) {

    let count = setInterval(function () {
        console.log("Timer:", time);
        (time === 0) ? (console.log("Ring Ring Ring!!!"), clearInterval(count)) : time--;
    }, 1000);
};

countdown(3);