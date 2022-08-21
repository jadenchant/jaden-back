const mongoose = require('mongoose');

const flightsSchema = new mongoose.Schema({
    date: {
        required: true,
        type: Date
    },
    flights: {
        requiered: true,
        type: Number
    },
    units: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Flights', flightsSchema)