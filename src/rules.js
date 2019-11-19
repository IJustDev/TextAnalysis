const Validators = require('./validators');


const validators = new Validators();

module.exports = [
    validators.maxOccours("er", 1),
    validators.maxOccoursPercentage("A", 10),
    {
        match: "  ",
        validate: () => {
            return "No doubled blank lines";
        },
    },
    {
        match: "Du",
        validate: () => {
            return "Du should never be capitalized.";
        }
    },
    {
        match: "Mensch",
        ignoreCase: true,
        validate: () => {
            return "Find a better synonym";
        }
    },
];