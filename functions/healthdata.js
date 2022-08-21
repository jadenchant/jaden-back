
const parceHealthData = async (jsonData) => {
  const data = jsonData.data.metrics
  const flights = data[0]
  const steps = data[1]
  const distance = data[2]

  console.log(flights)
  console.log(steps)
  console.log(distance)
}

module.exports = {
  parceHealthData
}