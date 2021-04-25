import {describe, expect, it} from '@jest/globals';
import TO from './to.mod.js';


const props = [
    ['boolean', 'bool', 'bul'],
    ['string', 'str'],
    ['number', 'num'],
];


describe('module TO', () => {


    it('is a function', () => void expect(TO).toBeFun());


    it(
        'returns itself for trivial call',
        () => void expect(TO()).toBe(TO), // eslint-disable-line new-cap
    );


    it(
        'has no extra properties',
        () => void expect(Object.keys(TO).flat()).toEqual(props.flat()),
    );


    describe.each([...props])('property', (key, ...aliases) => {


        it(
            `"${key}" is a function`,
            () => void expect(TO[key]).toBeFun(key),
        );


        it.each(
            aliases,
        )(
            `"${key}" has alias %p`,
            alias => void (
                expect([key, alias, TO[key]])
                    .toEqual([key, alias, TO[alias]])
            ),
        );

    });
});
