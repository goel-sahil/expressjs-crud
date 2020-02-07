'use strict';

class ErrorHandler {

    /**
     * Handle the errors
     */
    static handleError(error) {
        console.error('Error %s', error.message);

        return {
            status: error.status || 500,
            data: {
                message: error.message
            }
        };
    }
}

module.exports = ErrorHandler;