const removeFromArray = function(arr, ...elements) {

    for (const element of elements) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === element) {
                arr.splice(i, 1);
                i--;
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
