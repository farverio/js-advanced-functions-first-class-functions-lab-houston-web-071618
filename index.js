// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArray) {
  return array = driverArray.slice(0,2)
}

const returnLastTwoDrivers = function(driverArray) {
  return array = driverArray.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  return fare => fare * multiplier
}

const doubler = createFareMultiplier(2)
function fareDoubler(fare) {
  return doubler(fare)
}

const tripler = createFareMultiplier(3)
function fareTripler(fare) {
  return tripler(fare)
}

function selectDifferentDrivers(driversArray, driverFunction) {
  return driverFunction(driversArray)
}