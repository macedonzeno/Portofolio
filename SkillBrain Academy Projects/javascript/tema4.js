//Ex:1

let findSquare = (num) => {
    return num**2
  }
  
  console.log(findSquare(-12));
  
  //Ex: 2
  
  let getRandom = (start,end) => {
    start = Math.ceil(start);
    end = Math.floor(end);
    return Math.floor(Math.random()*(end-start)+start);
  }
  
  const numarAleator = getRandom(10, 20);
  console.log(numarAleator); // Acesta va afișa un număr aleator între 10 și 20 (exclusiv 20).
  
  //Ex: 3
  
  let letterCount = (string, litera) => {
    let counter = 0;
    for(let i = 0 ; i < string.length;i++){
      if (string[i].toLowerCase() === litera.toLowerCase()) {
        counter++ 
      }
    }
    console.log(counter);
  }

letterCount("Am bani, femei, mașini și bag haterii în spume", "a")
  
  //Ex: 4 
  
  let addNumber = (...argumente) => {
    sum = 0;
    for (let i = 0;i < argumente.length; i++) {
      sum += argumente[i];
    }
    console.log("Suma toatala este: " + sum)
  } 
  
  addNumber(1,2,3,4,5,200,6);