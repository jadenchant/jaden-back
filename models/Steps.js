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
},
{
    statics: {
        getStepsPrev(){
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

module.exports = mongoose.model('Steps', stepsSchema)