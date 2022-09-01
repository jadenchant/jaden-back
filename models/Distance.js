const mongoose = require("mongoose");

const distanceSchema = new mongoose.Schema(
  {
    date: {
      required: true,
      type: Date,
    },
    distance: {
      requiered: true,
      type: Number,
    },
    units: {
      required: true,
      type: String,
    },
  },
  {
    statics: {
      getDistancePrev() {
        const last = new Date();
        last.setDate(last.getDate() - 2);
        const now = new Date();
        return this.find({
          date: {
            $gt: last,
            $lt: now,
          },
        });
      },
    },
  }
);

module.exports = mongoose.model("Distance", distanceSchema);
