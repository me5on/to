import {describe, expect, it} from '@jest/globals';
import any from './any.fn.js';
import string from './string.mod.js';


describe('string', () => {


    it(
        'is the any string function',
        () => void expect(string).toBeFun(any),
    );


    it.each([
        void (1), null, '', NaN,
    ])(
        'returns empty string for %p',
        $ => expect(any).toMap('', $),
    );


    it.each([

        ['true', true],
        ['1', 1],
        ['Symbol(dummy symbol)', Symbol('dummy symbol')],

    ])(
        'returns correct string for %p',
        expect(any).toMap,
    );


});
