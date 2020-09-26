import { expect } from 'chai';
import { convert } from './converter';

describe('converter', () => {
    it('should convert one digit numbers', () => {
        expect(convert(0)).to.equal("zero");
        expect(convert(1)).to.equal("one");
        expect(convert(2)).to.equal("two");
    });
});