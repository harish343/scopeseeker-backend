// models/company.js

const mongoose = require('mongoose');

const companySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        website: { type: String },
    },
    { timestamps: true }
);

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
