declare module KarmiaUtility {
    export class KarmiaUtilityRandom {
        options: Object;
        number: string;
        lower: string;
        uppser: string;
        special: string;

        constructor(options: Object|null|undefined);
        string(length: number, options: Object|null|undefined);
        integer(max: number, min: null|number|undefined): number;
    }
}
