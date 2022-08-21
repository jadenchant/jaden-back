const mongoose = require('mongoose');

const stepsSchema = new mongoose.Schema({
    date: {
        required: true,
        type: Date
    },
    steps: {
        requiered: true,
        type: Number
    },
    units: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Steps', stepsSchema)