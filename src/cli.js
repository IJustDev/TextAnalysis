const TextUtils = require('./textUtils');

const textUtils = new TextUtils();
textUtils.readFile('input.txt');
console.log(textUtils.compileWithRules([
    {
        match: "dass",
        maxOccours: 2,
        maxOccoursPerSentence: 1
    },
    {
        match: "er",
        maxOccours: 1,
        maxOccoursPerSentence: 1
    },
]));