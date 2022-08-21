const express = require('express');
const Flights = require('../models/Flights')
const Steps = require('../models/Steps')
const Distance = require('../models/Distance')
const router = express.Router();

//Post Method
router.post('/post', async (req, res) => {
    const data = req.body.data.metrics
    const flights = data[0]
    const steps = data[1]
    const distance = data[2]

    const flightsData = new Flights({
        date: Date(),
        flights: flights.data[0].qty,
        units: flights.units
    })

    const stepsData = new Steps({
        date: Date(),
        steps: steps.data[0].qty,
        units: steps.units
    })

    const distanceData = new Distance({
        date: Date(),
        distance: distance.data[0].qty,
        units: distance.units
    })


    try {
        const flightsSave = await flightsData.save();
        const stepsSave = await stepsData.save();
        const distanceSave = await distanceData.save();
        res.status(200).json(flightsSave + stepsSave + distanceSave);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/get', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;