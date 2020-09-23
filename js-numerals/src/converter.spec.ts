import { expect } from 'chai';
import { convert } from './converter';

describe('converter', () => {
    it('should return the given parameter', () => {
        const parameter = 3;
        const recievedValue = convert(parameter);
        expect(recievedValue).to.equal(parameter);
    });
});