declare class KarmiaUtilityRandom {
    options: object;
    number: string;
    lower: string;
    upper: string;
    special: string;

    constructor(options?: object);
    string(length: number, options?: object): string;
    integer(max?: number, min?: number): number;
}

declare function karmia_utility_random(options: object): KarmiaUtilityRandom;
export = karmia_utility_random;
