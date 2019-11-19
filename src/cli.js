const TextUtils = require('./textUtils');
const rules = require('./rules.js');


const textUtils = new TextUtils();

textUtils.readFile('input.txt');

const errors = textUtils.compileWithRules(rules);

console.log(errors);