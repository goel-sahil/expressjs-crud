'use strict';

class UserNotFound extends Error {
    constructor(message = 'User does not exists!') {
        super(message);

        this.name = this.constructor.name;
        this.status = 404;
    }
}

module.exports = { UserNotFound };
