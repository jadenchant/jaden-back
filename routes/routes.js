const express = require("express");
const Flights = require("../models/Flights");
const Steps = require("../models/Steps");
const Distance = require("../models/Distance");
const router = express.Router();

//Post Method
router.post("/post", async (req, res) => {
  const data = req.body.data.metrics;
  const flights = data[0];
  const steps = data[1];
  const distance = data[2];

  const flightsData = new Flights({
    date: flights.data[0].date,
    flights: flights.data[0].qty,
    units: flights.units,
  });

  const stepsData = new Steps({
    date: steps.data[0].date,
    steps: steps.data[0].qty,
    units: steps.units,
  });

  const distanceData = new Distance({
    date: distance.data[0].date,
    distance: distance.data[0].qty,
    units: distance.units,
  });

  try {
    const flightsSave = await flightsData.save();
    const stepsSave = await stepsData.save();
    const distanceSave = await distanceData.save();
    res.status(200).json([flightsSave, stepsSave, distanceSave]);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/getFlights", async (req, res) => {
  try {
    const data = await Flights.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getFlightsPrev", async (req, res) => {
  try {
    const data = await Flights.getFlightsPrev();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getStepsPrev", async (req, res) => {
  try {
    const data = await Steps.getStepsPrev();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getDistancePrev", async (req, res) => {
  try {
    const data = await Distance.getDistancePrev();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
