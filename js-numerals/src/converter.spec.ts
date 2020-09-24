import { expect } from 'chai';
import { convert } from './converter';

describe('converter', () => {
    it('should convert one digit numbers', () => {
        const textForZero = convert(0);
        const textForOne = convert(1);
        const textForFive = convert(5);
        const textForNine = convert(9);

        expect(textForZero).to.equal("zero");
        expect(textForOne).to.equal("one");
        expect(textForFive).to.equal("five");
        expect(textForNine).to.equal("nine");
    });

    it('should return exceptional texts', () => {
        const textForEleven = convert(11);
        const textForTwelve = convert(12);
        const textForFifteen = convert(15);
        const textForNineteen = convert(19);

        expect(textForEleven).to.equal("eleven");
        expect(textForTwelve).to.equal("twelve");
        expect(textForFifteen).to.equal("fifteen");
        expect(textForNineteen).to.equal("nineteen");
    });
});