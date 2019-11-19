module.exports = class {

    /**
     * @param {string} match
     * @param {number} max
     */
    maxOccours(match, max) {
        return {
            match,
            validate: (result) => {
                if (result.length > max) {
                    return "Exceeds maximum amount of allowed occours.";
                }
            }
        }
    }

    /**
     * @param {string} match
     * @param {number} max percentage * 100 => 19% = 19
     */
    maxOccoursPercentage(match, max) {
        return {
            match,
            validate: (result, text) => {
                const percentage = (result.length / text.length) * 100;
                console.log(percentage);
                if (percentage > max) {
                    return "Exceeds maximum percentage of occourance.";
                }
            }
        }
    }

}
