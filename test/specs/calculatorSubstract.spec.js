const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const {expect} = require('chai');
chai.use(spies);

describe('Substract of two numbers', function () {
    let calculator, spy;

    beforeEach(() => {
        calculator = new Calculator.Calculator();
        spy = chai.spy.on(calculator, 'Substract of two numbers')
    });

    afterEach(() => {
        calculator = null;
    });


    const arrayOfParams = [
        {
            "firstParameter": "13",
            "secondParameter": "2",
            "result": "11"
        },
        {
            "firstParameter": "10",
            "secondParameter": "2",
            "result": "8"
        }
    ];

    arrayOfParams.forEach(param => {
        it(`should return ${param.result} when called with first argument ${param.firstParameter} and second argument ${param.secondParameter}`, function () {
            expect(calculator.substract(+param.firstParameter, +param.secondParameter)).to.be.equal(+param.result);
        });
    });
});