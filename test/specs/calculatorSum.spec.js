const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const {expect} = require('chai');
chai.use(spies);

describe('Sum of two numbers', function () {
    let calculator, spy;

    beforeEach(() => {
        calculator = new Calculator.Calculator();
        spy = chai.spy.on(calculator, 'Sum of two numbers')
    });

    afterEach(() => {
        calculator = null;
    });

    it('should return 6 when called with first argument 4 and second argument 2', function () {
        expect(calculator.sum(4, 2)).to.be.equal(6);
    });
});