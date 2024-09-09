const fibonacci = function (index) {
    if (index < 0) {
        return 'OOPS';
    }

    if (index == 0) {
        return 0;
    }

    let previousValue = 0;
    let fibonacciValue = 1;

    for (let i = 1; i < index; i++) {
        [fibonacciValue, previousValue] = [fibonacciValue + previousValue, fibonacciValue];
    }

    return fibonacciValue;
};

// Do not edit below this line
module.exports = fibonacci;
