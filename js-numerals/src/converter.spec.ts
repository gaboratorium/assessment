import { expect } from 'chai';
import { convert } from './converter';

describe('converter', () => {
    it('should convert one digit numbers', () => {
        expect(convert(0)).to.equal("zero");
        expect(convert(1)).to.equal("one");
        expect(convert(5)).to.equal("five");
        expect(convert(9)).to.equal("nine");
    });

    it('should convert two digit numbers', () => {
        expect(convert(10)).to.equal("ten");
        expect(convert(11)).to.equal("eleven");
        expect(convert(12)).to.equal("twelve");
        expect(convert(19)).to.equal("nineteen");
        expect(convert(20)).to.equal("twenty");
        expect(convert(22)).to.equal("twenty-two");
        expect(convert(39)).to.equal("thirty-nine");
        expect(convert(99)).to.equal("ninety-nine");
    });

    it('should convert three digit numbers', () => {
        expect(convert(100)).to.equal("one hundred");
        expect(convert(101)).to.equal("one hundred and one");
        expect(convert(112)).to.equal("one hundred and twelve");
        expect(convert(200)).to.equal("two hundred");
        expect(convert(222)).to.equal("two hundred and twenty-two");
        expect(convert(500)).to.equal("five hundred");
        expect(convert(578)).to.equal("five hundred and seventy-eight");
    });

    it('should convert four digit numbers', () => {
        expect(convert(1000)).to.equal("one thousand");
        expect(convert(1001)).to.equal("one thousand and one");
        expect(convert(1200)).to.equal("one thousand two hundred");
        expect(convert(1201)).to.equal("one thousand two hundred and one");
        expect(convert(1212)).to.equal("one thousand two hundred and twelve");
        expect(convert(1234)).to.equal("one thousand two hundred and thirty-four");
        expect(convert(9999)).to.equal("nine thousand nine hundred and ninety-nine");
    });

    it('should convert five digit numbers', () => {
        expect(convert(10000)).to.equal("ten thousand");
        expect(convert(10001)).to.equal("ten thousand and one");
    });
});