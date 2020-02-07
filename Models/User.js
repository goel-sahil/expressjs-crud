'use strict';

const mongoose = require('../database');
const Schema = mongoose.Schema;

// Define schema
const userSchema = new Schema({
    first_name: { type: String, default: '' },
    last_name: { type: String, default: '' },
    dob: { type: Date },
    status: { type: Number, default: 1 },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('users', userSchema);
