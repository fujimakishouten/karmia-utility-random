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

export = KarmiaUtilityRandom;
