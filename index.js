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

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(driversArray, driverFunction) {
  return driverFunction(driversArray)
}

console.log(fareTripler(3))