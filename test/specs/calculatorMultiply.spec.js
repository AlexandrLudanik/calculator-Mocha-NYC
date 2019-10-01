const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const {expect} = require('chai');
chai.use(spies);

describe('Multiply of two numbers', function () {
    let calculator, spy;

    beforeEach(() => {
        calculator = new Calculator.Calculator();
        spy = chai.spy.on(calculator, 'Multiply of two numbers')
    });

    afterEach(() => {
        calculator = null;
    });

    const arrayOfParams = [
        {
            "firstParameter": "13",
            "secondParameter": "2",
            "result": "26"
        },
        {
            "firstParameter": "10",
            "secondParameter": "2",
            "result": "20"
        }
    ];

    arrayOfParams.forEach(param => {
        it(`should return ${param.result} when called with first argument ${param.firstParameter} and second argument ${param.secondParameter}`, function () {
            expect(calculator.multiply(+param.firstParameter, +param.secondParameter)).to.be.equal(+param.result);
        });
    });
});