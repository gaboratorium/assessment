import { expect } from 'chai';
import { convert } from './converter';

describe('converter', () => {
    it('should convert one digit numbers', () => {
        expect(convert(0)).to.equal("zero");
        expect(convert(1)).to.equal("one");
        expect(convert(2)).to.equal("two");
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
});