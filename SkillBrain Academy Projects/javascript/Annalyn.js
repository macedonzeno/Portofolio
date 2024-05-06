//Check if the 'Fast Attack' action is possible
//Implement a function named canExecuteFastAttack that takes a boolean value which indicates if the knight is awake. This function returns true if the 'Fast Attack' action is available based on the state of the character. Otherwise, returns false:
const knightIsAwake = true;
const archerIsAwake = true;
const prisonerIsAwake = false;
const petDogIsPresent = true;

const canExecuteFastAttack = (sleeping) => {
 if (sleeping === true) {
   return false;
 }
  else {
    return true;
  }
}

console.log("Can execute Fast attack:",canExecuteFastAttack(knightIsAwake));

// Check if the 'Spy' action is possible
// Implement a function named canSpy that takes three boolean values, indicating if the knight, archer and the prisoner, respectively, are awake. The function returns true if the 'Spy' action is available based on the state of the characters. Otherwise, returns false:

const canSpy = (knightState, archerState, prisonerState) => {
  if (knightState || archerState || prisonerState === true) {
    return true;
  }
  else {
    return false;
  }
}

console.log("Can Spy:",canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake));

// Implement a function named canFreePrisoner that takes four boolean values. The first three parameters indicate if the knight, archer and the prisoner, respectively, are awake. The last parameter indicates if Annalyn's pet dog is present. The function returns true if the 'Free Prisoner' action is available based on the state of the characters and Annalyn's pet dog presence. Otherwise, it returns false:

const canFreePrisoner = (knightState, archerState, prisonerState, dogIsAround) => {
  if (dogIsAround === true && archerState === false){
    return true;
  }
  else if (prisonerState === true && knightState, archerState === false) {
   return true; 
  }
  else {
    return false;
  }
}

console.log("Can Free Prisoner:",canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent));