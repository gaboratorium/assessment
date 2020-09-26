import * as dictionaryService from './dictionary.service';

export function convert(number: number): string {

    if (dictionaryService.getExceptions().has(number.toString())) {
        return dictionaryService.getExceptions().get(number.toString()) || 'NaN';
    } else {
        return getNumberInText(number);
    }
}

const getNumberInText = (number: number): string => {
    const thousandsInReverse: number[] = getThousandsInReverse(number); // 23.425.123 = [123, 425, 23]
    console.log(`thousandsInReverse: ${thousandsInReverse}`)
    const thousandsAsText: string[] = getThousandsAsText(thousandsInReverse);
    return thousandsAsText.join(" ");
}

const getThousandsInReverse = (number: number): number[] => {
    const thousands = [];
    while(number > 0) {
        thousands.push(number % 1000);
        number = Math.floor(number / 1000);
    }
    return thousands;
}

const getThousandsAsText = (thousandsInReverse: number[]): string[] => {
    const thousandsAsText: string[] = [];

    thousandsInReverse.forEach((thousand, index) => {
        const chunkAsText: string = getChunkAsText(thousand, index);
        thousandsAsText.push(chunkAsText)
    });
    
    return thousandsAsText.reverse();
}

const getChunkAsText =(chunk: number, index: number): string => {
    const scale = dictionaryService.getScales()[index]; 
    const hundredScale = dictionaryService.getScales()[1];
    const hundredsText: string = getHundredsText(chunk, hundredScale); 
    const tensOrOnesText: string = getTensOrOnesText(chunk);
    if (index == 0) {
        return hundredsText == '' ? tensOrOnesText : `${hundredsText} and ${tensOrOnesText}`
    } else {
        return `${hundredsText} ${tensOrOnesText} ${scale}`;
    }
}

const getHundredsText = (chunk: number, hundredScale: string): string => {
    const numberOfHundreds: number = Math.floor(chunk / 100);
    const numberOfHundredsInText = dictionaryService.getOnes().get(numberOfHundreds.toString());
    return numberOfHundreds > 0 ? `${numberOfHundredsInText} ${hundredScale}` : ``;
}

const getTensOrOnesText = (chunk: number): string => {
    const twoDigitNumber: number = (chunk % 100);
    if (dictionaryService.getExceptions().has(twoDigitNumber.toString())) {
        return dictionaryService.getExceptions().get(twoDigitNumber.toString()) || '';
    } else {
        return getTwoDigitNumberAsText(twoDigitNumber);
    }
}

const getTwoDigitNumberAsText = (twoDigitNumber: number) => {
    console.log(`Getting two digit numbersAsText...`)

    const tens = Math.floor(twoDigitNumber  / 10);
    const ones = (twoDigitNumber % 10);

    if (tens > 0 && ones > 0) {
        console.log(`Getting two digit numbersAsText... first case`)
        return `${dictionaryService.getTens().get(tens.toString())}-${dictionaryService.getOnes().get(ones.toString())}}`
    } else if (tens > 0) {
        console.log(`Getting two digit numbersAsText... second case`)
        return `${dictionaryService.getTens().get(tens.toString())}`
    } else if (ones >= 0) {
        console.log(`Getting two digit numbersAsText... third case`)
        return `${dictionaryService.getOnes().get(ones.toString())}`
    } else {
        return ``;
    }
}

export default convert;