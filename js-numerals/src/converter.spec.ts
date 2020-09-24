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
        expect(convert(12)).to.equal("twelve");
        expect(convert(13)).to.equal("thirteen");
        expect(convert(19)).to.equal("nineteen");
        expect(convert(90)).to.equal("ninety");
        expect(convert(99)).to.equal("ninety-nine");
        expect(convert(20)).to.equal("twenty");
        expect(convert(22)).to.equal("twenty-two");
        expect(convert(55)).to.equal("fifty-five");
    });
});