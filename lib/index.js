/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/* eslint-env es6, mocha, node */
/* eslint-extends: eslint:recommended */
'use strict';



// Variables
const karmia_utility_string = require('karmia-utility-string'),
    kstring = karmia_utility_string();


class KarmiaUtilityRandom {
    /**
     * Constructor
     *
     * @constructs KarmiaUtilityRandom
     */
    constructor(options) {
        const self = this;
        self.options = options || {};
        self.number = self.options.number || '0123456789';
        self.lower = self.options.lower || 'abcdefghijklmnopqrstuvwxyz';
        self.upper = self.options.upper || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        self.special = self.options.special || '!"#$%&\'()*+,_./:;<=>?@[\\]^_`{|}~';

        self.integer = KarmiaUtilityRandom.integer;
    }

    /**
     * Generate random string
     *
     * @param   {number} length
     * @param   {Object} options
     * @returns {string}
     */
    string(length, options) {
        const self = this;
        let haystack = '',
            result = '';
        options = options || {};

        if (options.number !== false) {
            haystack += kstring.isString(options.numbers) ? options.numbers : self.number;
        }

        if (options.lower !== false) {
            haystack += kstring.isString(options.lower) ? options.lower : self.lower;
        }

        if (options.upper !== false) {
            haystack += kstring.isString(options.upper) ? options.upper : self.upper;
        }

        if (options.special !== false) {
            haystack += kstring.isString(options.special) ? options.special : self.special;
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
     * @param   {number} max
     * @param   {number} min
     * @returns {*}
     */
    static integer(max, min) {
        max = max || Number.MAX_SAFE_INTEGER;
        min = min || 0;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}


// Export module
module.exports = function (options) {
    return new KarmiaUtilityRandom(options || {});
};




/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
