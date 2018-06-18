/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/* eslint-env es6, mocha, node */
/* eslint-extends: eslint:recommended */
'use strict';



// Declaration
declare function require(id: string): any;


// Import modules
import KarmiaUtilityRandom from "../";
const expect = require("expect.js");


// Variables
const random = new KarmiaUtilityRandom();


// Test
describe('karmia-utility-random', function () {
    describe('string', function () {
        describe('Should get random string', function () {
            it('All characters', function () {
                expect(random.string(32)).to.have.length(32);
            });

            it('Only numbers', function () {
                const result = random.string(32, {
                    lower: null,
                    upper: null,
                    special: null
                });

                expect(result).to.match(/[0-9]{32}/);
            });

            it('Only lower characters', function () {
                const result = random.string(32, {
                    number: null,
                    upper: null,
                    special: null
                });

                expect(result).to.match(/[a-z]{32}/);
            });

            it('Only upper characters', function () {
                const result = random.string(32, {
                    number: null,
                    lower: null,
                    special: null
                });

                expect(result).to.match(/[A-Z]{32}/);
            });

            it('Only characters', function () {
                const result = random.string(32, {
                    number: null,
                    special: null
                });

                expect(result).to.match(/[A-z]{32}/);
            });

            it('Only special characters', function () {
                const result = random.string(32, {
                    number: null,
                    lower: null,
                    upper: null
                });

                expect(result).to.match(/[^A-z0-9]/);
            });

            it('Without characters', function () {
                expect(random.string(32, {special: null})).to.match(/[A-z0-9]{32}/);
            });
        });

        it('Should be error', function () {
            try {
                random.string(32, {
                    number: null,
                    lower: null,
                    upper: null,
                    special: null
                });
            } catch (e) {
                expect(e.message).to.be('Empty haystack');
            }
        });
    });

    describe('integer', function () {
        describe('Should get random integer', function () {
            it('No parameter specified', function () {
                const result = random.integer();
                expect(Number.isInteger(result)).to.be(true);
                expect(result).to.greaterThan(-1);
            });

            it('Max specified', function () {
                const min = 0,
                    max = 5,
                    result = random.integer(5);

                expect(result).to.greaterThan(min - 1);
                expect(result).to.lessThan(max + 1);
            });

            it('Max and min specified', function () {
                const min = 5,
                    max = 10,
                    result = random.integer(max, min);
                expect(result).to.greaterThan(min - 1);
                expect(result).to.lessThan(max + 1);
            });
        });
    });
});
