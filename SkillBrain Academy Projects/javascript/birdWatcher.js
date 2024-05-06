// Privitorul De pasari
//1. Determine the total number of birds that you counted so far

birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

const totalBirdCount= (arr) => {
  let sum = 0;
  for (let i = 0;i < arr.length;i++){
    sum += arr[i];
  }
  return sum;
}

console.log(totalBirdCount(birdsPerDay));

//2.2. Calculate the number of visiting birds in a specific week

// const birdsInWeek = (arr,numberOfWeeks) => {
//   weekDays = 7;
//   startIndex = ()
// }

//3. Fix a counting mistake

const fixBirdCountLog = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 == 0 ) {
        arr[i] = arr[i] + 1;
        // console.log(arr);
      }
      // console.log(arr);
    }
    return arr;
  }
  console.log(fixBirdCountLog(birdsPerDay));
  