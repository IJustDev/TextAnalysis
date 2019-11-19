module.exports = class {

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

}
