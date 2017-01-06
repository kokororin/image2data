'use strict';
const mime = require('mime');
const util = require('util');
const fs = require('fs');

module.exports = function(imagePath) {
    const data = fs.readFileSync(imagePath).toString('base64');
    return util.format("data:%s;base64,%s", mime.lookup(imagePath), data);
};
