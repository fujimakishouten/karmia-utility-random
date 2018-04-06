/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/* eslint-env es6, mocha, node */
/* eslint-extends: eslint:recommended */
'use strict';



// Import modules
import KarmiaUtilityString = require("karmia-utility-string");


declare interface Options {
    number?: string;
    lower?: string;
    upper?: string;
    special?: string;
}


class KarmiaUtilityRandom {
    public options: Options;
    public number: string;
    public lower: string;
    public upper: string;
    public special: string;

    public integer = KarmiaUtilityRandom.integer;

    /**
     * Constructor
     *
     * @constructs KarmiaUtilityRandom
     */
    constructor(options?: Options) {
        this.options = options || {} as Options;
        this.number = this.options.number || '0123456789';
        this.lower = this.options.lower || 'abcdefghijklmnopqrstuvwxyz';
        this.upper = this.options.upper || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.special = this.options.special || '!"#$%&\'()*+,_./:;<=>?@[\\]^_`{|}~';

        this.integer = KarmiaUtilityRandom.integer;
    }

    /**
     * Generate random string
     *
     * @param   {number} length
     * @param   {Object} options
     * @returns {string}
     */
    string(length: number, options?: Options) {
        const self = this;
        let haystack = '',
            result = '';
        options = options || {} as Options;

        if (options.number !== null) {
            haystack += KarmiaUtilityString.isString(options.number) ? options.number : self.number;
        }

        if (options.lower !== null) {
            haystack += KarmiaUtilityString.isString(options.lower) ? options.lower : self.lower;
        }

        if (options.upper !== null) {
            haystack += KarmiaUtilityString.isString(options.upper) ? options.upper : self.upper;
        }

        if (options.special !== null) {
            haystack += KarmiaUtilityString.isString(options.special) ? options.special : self.special;
        }

        if (!haystack) {
            throw new Error('Empty haystack');
        }

        for (let i = 0; i < length; i = i + 1) {
            result = result + haystack[Math.floor(Math.random() * haystack.length)];
        }

        return result;
    }

    /**
     * Generate random integer
     *
     * @param   {number} [max=Number.MAX_SAFE_INTEGER]
     * @param   {number} [min=0]
     * @returns {number}
     */
    static integer(max=Number.MAX_SAFE_INTEGER, min=0): number {
        max = max || Number.MAX_SAFE_INTEGER;
        min = min || 0;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}


// Export module
export = KarmiaUtilityRandom;



/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
