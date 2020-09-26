import * as dictionaryService from './dictionary.service';

export function convert(number: number): string {

    if (dictionaryService.getExceptions().has(number.toString())) {
        return dictionaryService.getExceptions().get(number.toString()) || 'NaN';
    } else {
        return getNumberInText(number);
    }
}

const getNumberInText = (number: number): string => {
    const thousandsInReverse: number[] = getThousandsInReverse(number); // 23.425.123 => [123, 425, 23]
    console.log(`thousands in reverse: ${thousandsInReverse}`)
    const thousandsAsText: string[] = getThousandsAsText(thousandsInReverse);

    console.log(`thousandsAsText ${thousandsAsText}`);

    console.log(`thousandsAsText: ${thousandsAsText}`);

    if (thousandsAsText.length > 1) {
        return thousandsAsText
            .filter(word => word !== dictionaryService.getExceptions().get("0")) // remove zero from the end
            .join(" ");
    } else {
        return thousandsAsText.join(" ");
    }

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
    const scale = dictionaryService.getScales()[index+1]; 
    const hundredScale = dictionaryService.getScales()[1];
    const hundredsText: string = getHundredsText(chunk, hundredScale); 
    const tensOrOnesText: string = getTensOrOnesText(chunk);
    
    if (index == 0) {
        if (hundredsText == '') {
            return tensOrOnesText;
        } else if (dictionaryService.getExceptions().get("0") == tensOrOnesText) {
            return hundredsText;
        } else {
            return `${hundredsText} and ${tensOrOnesText}`;
        }
    } else {
        if (hundredsText == '') {
            return `${tensOrOnesText} ${scale}`;
        } else if (tensOrOnesText == '') {
            return `${hundredsText} ${scale}`;
        } else {
        return `${hundredsText} ${tensOrOnesText} ${scale}`;
        }
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
    const tens = Math.floor(twoDigitNumber  / 10);
    const ones = (twoDigitNumber % 10);

    if (tens > 0 && ones > 0) {
        return `${dictionaryService.getTens().get((tens*10).toString())}-${dictionaryService.getOnes().get(ones.toString())}`
    } else if (tens > 0) {
        return `${dictionaryService.getTens().get((tens*10).toString())}`
    } else if (ones >= 0) {
        return `${dictionaryService.getOnes().get(ones.toString())}`
    } else {
        return ``;
    }
}

export default convert;