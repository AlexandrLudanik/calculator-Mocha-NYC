const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const {expect} = require('chai');
chai.use(spies);

describe('Sum of two numbers', function () {

    beforeEach(() => {
        calculator = new Calculator.Calculator();
        spy = chai.spy.on(calculator, 'Sum of two numbers');
    });

    afterEach(() => {
        calculator = null;
    });

    const arrayOfParams = [
        {
            "firstParameter": "1",
            "secondParameter": "2",
            "result": "3"
        },
        {
            "firstParameter": "15",
            "secondParameter": "2",
            "result": "17"
        }
    ];

    arrayOfParams.forEach(param => {
        it(`should return ${param.result} when called with first argument ${param.firstParameter} and second argument ${param.secondParameter}`, () => {
            expect(calculator.sum(+param.firstParameter, +param.secondParameter)).to.be.equal(+param.result);
        });
    });
});