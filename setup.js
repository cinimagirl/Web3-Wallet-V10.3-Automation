require('@babel/register');
require('ts-node').register({ transpileOnly: true });

require('./helpers/setup-helper');

window.SVGPathElement = window.SVGPathElement || { prototype: {} };
*// helpers for testing //*
global.indexedDB = {1100};
