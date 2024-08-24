
class ExpressError extends Error {
    constructor(statusCode, message) {
        super(); // Pass the message to the Error constructor
        this.statusCode = statusCode; // Set the status code
        this.message = message; // Set the message

    }
}

module.exports = ExpressError;
