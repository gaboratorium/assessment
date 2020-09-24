import * as dictionaryService from './dictionary.service';

export function convert(number: number): string {
    if (isException(number)) {
        return convertException(number) || "NaN";
    } else {
        return convertUsingStrategy(number) || "NaN"
    }
}

const isException = (number: number): boolean => {
    return dictionaryService.getExceptions().has(number.toString());
}

const convertException = (number: number): string | undefined => {
    return dictionaryService.getExceptions().get(number.toString());
}

const convertUsingStrategy = (number: number): string | undefined => { 
    const digits: number = number.toString().length;
    console.log(`Strategy, digits: ${digits}`);
    switch (digits) {
        case 1: return convertWithOneDigitStrategy(number)
        case 2: return convertWithOneDigitStrategy(number);
        case 3: return convertWithOneDigitStrategy(number);
        case 4: return convertWithOneDigitStrategy(number);
        case 5: return convertWithOneDigitStrategy(number);
        case 6: return convertWithOneDigitStrategy(number);
        default: return undefined;
    }
}

const convertWithOneDigitStrategy = (number: Number): string | undefined => {
    const ones: Map<string, string> = dictionaryService.getOnes();
    console.log(`Converting with One Digit Strategy... map: ${ones}`);
    return ones.get(number.toString());
}
  
export default convert;