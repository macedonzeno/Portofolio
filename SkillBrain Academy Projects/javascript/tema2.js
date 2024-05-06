//Ex 1:

let n = parseInt(prompt("Introdu limita pana la care sa se afiseze numerele pare: "));
let i = 0;

do {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}
while (i <= n);

//Ex 2:

const calculatorSuma = (arr) => {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    // console.log(sum);
  }
  return sum;
}
a = [3.45, -2.68, 356, -75.96, 64, 19.28];
console.log("Suma totala a elementelor din sir este:", calculatorSuma(a));

//Ex 3: 

let sir = [1, -5, 20, -34, 16, 29, 36, -4];

const coadaCap = (arr) => {
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    reverse = reverse.concat(arr[i]);
  }
  console.log(reverse);
}
coadaCap(sir);

// Ex 4:

let input = prompt("Scrie ceva, de preferabil in litere:");

const vowelCounter = (arr) => {
  let counter = 0;
  for (i = 0; i < arr.length; i++) {
    for (let j = 0;j < arr.length ; j++) {
      let vowels = ["a","e","i","o","u"];
      if (arr[i] === vowels[j]) {
        counter += 1;
      }
    }
  }
  return(counter);
}

console.log("Numarul de vocale este:",vowelCounter(input));

//Bonus! Ex 4 RAW:

// let input = prompt("Scrie ceva, de preferabil in litere:");
// // let input = "aveon";

// const vowelCounter = (arr) => {
//   let counter = 0;
//   for (i = 0; i < arr.length; i++) {
//     // let vowels = ["a","e","i","o","u"];
//     // let [head,...tail] = input;
//     // head.concat(tail);
//     // let counter = 0;
//     for (let j = 0;j < arr.length ; j++) {
//       // let counter = 0;
//       let vowels = ["a","e","i","o","u"];
//       if (arr[i] === vowels[j]) {
//         counter += 1;
        
//       }
//     // console.log(counter);
//     }
//     // console.log(counter);
//   }
//   console.log(counter);
//   return(counter);
// }

// console.log("Numarul de vocale este:",vowelCounter(input));
// // let [a,...rest] = input ;
// // console.log(rest)
// // matriceDestr = rest.unshift(a);
// // console.log(rest);



