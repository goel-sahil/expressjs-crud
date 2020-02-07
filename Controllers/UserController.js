'use strict';

const moment = require('moment');
const UserModel = require('../Models/User');
const ErrorHandler = require('../utils/ErrorHandler');
const Exception = require('../utils/Exception');

class UserController {

    /**
     * Add user to DB
     */
    static async store(data) {
        try {
            const dob = moment(data.dob).toISOString();
            const userData = {
                first_name: data.first_name,
                last_name: data.last_name,
                dob: dob,
                status: 1,
            };

            const result = await UserModel.create(userData);

            return {
                status: 200,
                data: {
                    message: 'User has been created successfully!',
                    data: result
                }
            };
        } catch (error) {
            return ErrorHandler.handleError(error);
        }
    }

    /**
     * Get list of users
     */
    static async index() {
        try {
            let users = await UserModel.find();
            return {
                status: 200,
                data: {
                    data: users,
                    message: "Users list found successfully!"
                }
            };
        } catch (error) {
            return ErrorHandler.handleError(error);
        }
    }

    /**
     * Get the user
     */
    static async show(id) {
        try {
            let user = await UserModel.findById(id);

            if (!user) {
                throw new Exception.UserNotFound();
            }

            return {
                status: 200,
                data: {
                    data: user,
                    message: "User found successfully!"
                }
            };
        } catch (error) {
            return ErrorHandler.handleError(error);
        }
    }

    /**
     * Update the user
     */
    static async update(id, data) {
        try {
            let user = await UserModel.findById(id);

            if (!user) {
                throw new Exception.UserNotFound();
            }

            let { first_name, last_name } = data;
            let userData = { first_name, last_name };

            if (data.hasOwnProperty('dob') && data.dob) {
                userData.dob = moment(data.dob).toISOString();
            }

            Object.assign(user, userData);
            await user.save();

            return {
                status: 200,
                data: {
                    message: 'User has been updated successfully!',
                    data: user
                }
            };
        } catch (error) {
            return ErrorHandler.handleError(error);
        }
    }

    /**
     * Delete the user
     */
    static async destroy(id) {
        try {
            let user = await UserModel.findById(id);

            if (!user) {
                throw new Exception.UserNotFound();
            }

            await user.delete();

            return {
                status: 200,
                data: {
                    message: 'User has been deleted successfully!'
                }
            };
        } catch (error) {
            return ErrorHandler.handleError(error);
        }
    }
}

module.exports = UserController;