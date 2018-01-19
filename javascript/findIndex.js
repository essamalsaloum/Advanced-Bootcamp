 //findIndex

var arr = [3, 4, 6, 2, 1];

findIndex(arr, function(num, index, array) {
    return num === 6; //returns 3
});

function findIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}

