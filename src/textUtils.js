const fs = require('fs');


module.exports = class TextUtils {

    /**
     * @param {string} pathToFile
     */
    readFile(pathToFile) {
        this.input = fs.readFileSync(pathToFile).toString();
    }

    /**
     * @param {string} regexString
     */
    find(regexString, ignoreCase) {
        const flags = ignoreCase ? "gi" : "g";
        const regex = new RegExp(regexString, flags);
        return this.input.match(regex);
    }

    /**
     * @param {Object} rules
     */
    compileWithRules(rules) {
        const errors = [];
        rules.forEach((rule) => {
            const matches = this.find(rule.match, rule.ignoreCase);
            if (matches !== null) {
                const response = rule.validate(matches, this.input);
                if (response !== undefined) {
                    const errorObject = {
                        error: response,
                        match: rule.match,
                        found: matches.length
                    };
                    errors.push(errorObject);
                }
            }
        });
        return errors;
    }
}