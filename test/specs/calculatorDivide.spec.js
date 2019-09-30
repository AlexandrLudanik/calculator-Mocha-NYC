const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const {expect} = require('chai');
chai.use(spies);

describe('Divide of two numbers', function () {
    let calculator, spy;

    beforeEach(() => {
        calculator = new Calculator.Calculator();
        spy = chai.spy.on(calculator, 'Divide of two numbers')
    });

    afterEach(() => {
        calculator = null;
    });

    it('should return 2 when called with first argument 4 and second argument 2', function () {
        expect(calculator.divide(4, 2)).to.be.equal(2);
    });

    it('should throw an error if second argument will be a 0 number', function() {
        let callWithError = () => calculator.divide(5, 0);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw(`We can not divide on 0`);
    });
});