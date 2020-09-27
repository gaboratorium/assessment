import { expect } from 'chai';
import { convert } from './converter';

describe('converter', () => {
    it('should convert 1 digit numbers', () => {
        expect(convert(0)).to.equal("zero");
        expect(convert(1)).to.equal("one");
        expect(convert(5)).to.equal("five");
        expect(convert(9)).to.equal("nine");
    });

    it('should convert 2 digit numbers', () => {
        expect(convert(10)).to.equal("ten");
        expect(convert(11)).to.equal("eleven");
        expect(convert(12)).to.equal("twelve");
        expect(convert(19)).to.equal("nineteen");
        expect(convert(20)).to.equal("twenty");
        expect(convert(22)).to.equal("twenty-two");
        expect(convert(39)).to.equal("thirty-nine");
        expect(convert(99)).to.equal("ninety-nine");
    });

    it('should convert 3 digit numbers', () => {
        expect(convert(100)).to.equal("one hundred");
        expect(convert(101)).to.equal("one hundred and one");
        expect(convert(112)).to.equal("one hundred and twelve");
        expect(convert(200)).to.equal("two hundred");
        expect(convert(222)).to.equal("two hundred and twenty-two");
        expect(convert(500)).to.equal("five hundred");
        expect(convert(578)).to.equal("five hundred and seventy-eight");
    });

    it('should convert 4 digit numbers', () => {
        expect(convert(1000)).to.equal("one thousand");
        expect(convert(1001)).to.equal("one thousand and one");
        expect(convert(1200)).to.equal("one thousand two hundred");
        expect(convert(1201)).to.equal("one thousand two hundred and one");
        expect(convert(1212)).to.equal("one thousand two hundred and twelve");
        expect(convert(1234)).to.equal("one thousand two hundred and thirty-four");
        expect(convert(9999)).to.equal("nine thousand nine hundred and ninety-nine");
    });

    it('should convert 5 digit numbers', () => {
        expect(convert(10000)).to.equal("ten thousand");
        expect(convert(10001)).to.equal("ten thousand and one");
        expect(convert(10012)).to.equal("ten thousand and twelve");
        expect(convert(10028)).to.equal("ten thousand and twenty-eight");
        expect(convert(10050)).to.equal("ten thousand and fifty");
        expect(convert(10100)).to.equal("ten thousand one hundred");
        expect(convert(10101)).to.equal("ten thousand one hundred and one");
        expect(convert(10111)).to.equal("ten thousand one hundred and eleven");
        expect(convert(10151)).to.equal("ten thousand one hundred and fifty-one");
        expect(convert(11001)).to.equal("eleven thousand and one");
        expect(convert(11111)).to.equal("eleven thousand one hundred and eleven");
    });

    it('should convert 6 digit numbers', () => {
        expect(convert(100000)).to.equal("one hundred thousand");
        expect(convert(100001)).to.equal("one hundred thousand and one");
        expect(convert(100012)).to.equal("one hundred thousand and twelve");
        expect(convert(100020)).to.equal("one hundred thousand and twenty");
        expect(convert(100022)).to.equal("one hundred thousand and twenty-two");
        expect(convert(100122)).to.equal("one hundred thousand one hundred and twenty-two");
        expect(convert(103122)).to.equal("one hundred three thousand one hundred and twenty-two");
        expect(convert(143122)).to.equal("one hundred forty-three thousand one hundred and twenty-two");
        expect(convert(140015)).to.equal("one hundred forty thousand and fifteen");
    });

    it('should convert 7 digit numbers', () => {
        expect(convert(1000000)).to.equal("one million");
        expect(convert(1000001)).to.equal("one million and one");
        expect(convert(1000012)).to.equal("one million and twelve");
        expect(convert(1000032)).to.equal("one million and thirty-two");
        expect(convert(1000112)).to.equal("one million one hundred and twelve");
        expect(convert(1234567)).to.equal("one million two hundred thirty-four thousand five hundred and sixty-seven");
    })
});