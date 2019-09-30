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

    afterEach(() => {
        calculator = null;
    });

    it('should return 16 when called with first argument 4 and second argument 2', function () {
        expect(calculator.pow(4, 2)).to.be.equal(16);
    });
});