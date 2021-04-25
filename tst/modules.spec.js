import {describe, expect, it} from '@jest/globals';
import TO from '../src/to/to.mod.js';


describe.each([

    ['boolean', TO.boolean],
    ['number', TO.number],
    ['string', TO.string],

])('module', (name, mod) => { // eslint-disable-line no-shadow

    describe(name, () => {


        it(
            'is a function',
            expect(mod).toBeFun,
        );


        it(
            'has a "from" function property',
            expect(mod.from).toBeFun,
        );


        it(
            `${name}.from() returns itself for trivial call`,
            () => void expect(mod.from()).toBe(mod.from),
        );


    });
});
