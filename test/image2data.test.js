'use strict';
const path = require('path');
const assert = require('power-assert');
const image2data = require('..');

describe('image2data', () => {
    it('no error of run `image2data`', () => {
        const filePath = path.join(__dirname,
            'example.png');
        assert.strictEqual(typeof image2data(filePath) === 'string', true);
    });
});
