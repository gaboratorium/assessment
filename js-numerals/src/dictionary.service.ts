import * as dictionary from './dictionary.json';

type Dictionary = { [index: string]: string }

export function getExceptions(): Map<string, string> {
    return getMapFor(dictionary["exceptions"]);
}

export function getOnes(): Map<string, string> {
    return getMapFor(dictionary["ones"]);
}

export function getTens(): Map<string, string> {
    return getMapFor(dictionary["tens"]);
}

export function getScales(): string[] {
    return dictionary["scales"];
}

const getMapFor = (obj: Dictionary) => {
    const map: Map<string, string> = new Map();
    for (let [key, value] of Object.entries(obj)) {
        map.set(key, value);
    }
    return map;
}