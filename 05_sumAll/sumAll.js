const sumAll = function(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return "ERROR";
    if (a < 0 || !Number.isInteger(a) || b < 0 || !Number.isInteger(b)) return "ERROR";

    sum = 0;
    high = Math.max(a, b);
    low = Math.min(a, b);

    for (let i = low; i <= high; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
