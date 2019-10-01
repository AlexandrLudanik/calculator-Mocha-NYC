const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const {expect} = require('chai');
chai.use(spies);

describe('Pow number', function () {
    let calculator, spy;

    beforeEach(() => {
        calculator = new Calculator.Calculator();
        spy = chai.spy.on(calculator, 'Pow number')
    });

    const arrayOfParams = [
        {
            "firstParameter": "11",
            "secondParameter": "2",
            "result": "121"
        },
        {
            "firstParameter": "130",
            "secondParameter": "2",
            "result": "16900"
        }
    ];

    arrayOfParams.forEach(param => {
        it(`should return ${param.result} when called with first argument ${param.firstParameter} and second argument ${param.secondParameter}`, function () {
            expect(calculator.pow(+param.firstParameter, +param.secondParameter)).to.be.equal(+param.result);
        });
    });
});