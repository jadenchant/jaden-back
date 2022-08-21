const mongoose = require('mongoose');

const distanceSchema = new mongoose.Schema({
    date: {
        required: true,
        type: Date
    },
    distance: {
        requiered: true,
        type: Number
    },
    units: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Distance', distanceSchema)