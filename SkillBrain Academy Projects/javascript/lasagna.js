// Task 1: Define the expected oven time in minutes
const EXPECTED_MINUTES_IN_OVEN = 40;

// Task 2: Calculate the remaining oven time in minutes
function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

// Task 3: Calculate the preparation time in minutes
function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * 2;
}

// Task 4: Calculate the total working time in minutes
function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  const preparationTime = preparationTimeInMinutes(numberOfLayers);
  return preparationTime + actualMinutesInOven;
}

// Testing the functions
console.log(remainingMinutesInOven(30)); // Output: 10
console.log(preparationTimeInMinutes(2)); // Output: 4
console.log(totalTimeInMinutes(2, 30)); // Output: 34
