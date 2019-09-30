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

    it('should return 8 when called with first argument 4 and second argument 2', function () {
        expect(calculator.multiply(4, 2)).to.be.equal(8);
    });
});