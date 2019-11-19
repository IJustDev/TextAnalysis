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
    find(regexString) {
        const regex = new RegExp(regexString, "g");
        return this.input.match(regex);
    }

    /**
     * @param {Object} rules
     */
    compileWithRules(rules) {
        const errors = [];
        rules.forEach((rule) => {
            const result = this.find(rule.match);
            if (result !== null) {
                if (result.length > rule.maxOccours) {
                    errors.push({
                        match: rule.match,
                        error: "Exceeds maximum occours",
                        found: result.length,
                    });
                }
            }
        });
        return errors;
    }
}