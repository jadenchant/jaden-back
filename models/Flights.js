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
},
{
    statics: {
        getFlightsPrev(){
            const last = new Date()
            last.setDate(last.getDate()-2)
            const now = new Date()
            return this.find({
                date: {
                    $gt: last,
                    $lt: now
                }
            })
        }
    }
}
)

module.exports = mongoose.model('Flights', flightsSchema)