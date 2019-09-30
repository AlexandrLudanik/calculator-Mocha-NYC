class Calculator {
    constructor() {

    };

    sum(a, b) {
        return a + b;
    };

    multiply(a, b) {
        return a * b;
    };

    substract(a, b) {
        return a - b;
    };

    pow(a, b) {
        return Math.pow(a, b);
    };

    divide(a, b) {
        if (b === 0) {
            throw new Error(`We can not divide on 0`);
        } else {
            return a / b;
        }
    };


};

module.exports = {
    Calculator
};