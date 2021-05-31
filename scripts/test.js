'use strict'

const jest = require('jest');
const app = process.argv[2];
const argv = process.argv.slice(3);

jest.run([`--config=${app}/jest.config.json`, ...argv]);