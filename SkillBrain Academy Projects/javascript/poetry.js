// Instructions
// A new poetry club has opened in town, and you're thinking of attending. Because there have been incidents in the past, the club 
//has a very specific door policy which you'll need to master, before attempting entry.

// There are two doors at the poetry club, a front and a back door, and both are guarded. To gain entry, you'll need to work out the password of the day.

// The password is always based on a poem and can be derived in a two-step process.

// The guard will recite the poem, one line at a time and you have to respond with an appropriate letter of that line.
// The guard will now tell you all the letters you responded with at once, and you need to write them down on a piece of paper in a specific format.
// The details of the process depend on which door you are trying to enter.
// 1. Get the first letter of a sentence
// To determine the letters for the front door password, you need to respond with the first letter of the line of the poem, that the guard recites to you.

// To end up with a nice password, the members of the poetry club like to use acrostic poems. This means that the first letter of each sentence forms a word.
//  Here is an example by one of their favorite writers Michael Lockwood.

const frontDoorPoem = [
    "Stands so high",
    "Huge hooves too",
    "Impatiently waits for",
    "Reins and harness",
    "Eager to leave"
  ];
  // console.log(frontDoorPoem);
  
  
  const frontDoorResponse = (arr) => {
    let password = [];
    for (i = 0; i < arr.length;i++) {
      password = password + arr[i][0];
      console.log("Guard: ",arr[i],"\n Your Response:",arr[i][0])
    }
    const frontDoorPassword = (word) => {
    slicedWord = word.slice(1,word.length);
    loweredCase = slicedWord.toLowerCase();
    word = word[0] + loweredCase;
    // console.log(word);
      return word;
    }
    console.log("You: Password is:" ,frontDoorPassword(password));
    console.log("Guard: You are granted permission to enter!");
  }
  const backDoorResponse = (arr) => {
    let password = [];
    for (i = 0; i < arr.length;i++) {
      password = password + arr[i][arr[i].length - 1];
      console.log("Guard: ",arr[i],"\n Your Response:",arr[i][arr[i].length - 1]);
    }
    const backDoorPassword = (word) => {
    slicedWord = word.slice(0,1);
    // console.log(slicedWord)
    upperedCase = slicedWord.toUpperCase();
    // console.log(upperedCase)
    word = upperedCase + word.slice(1,word.length);
    // console.log(word);
    return word;
    }
    console.log("You: Password is:" ,backDoorPassword(password),", please!");
    console.log("Guard: You are granted permission to enter!")
    
  }
  
  console.log("Guard: You reached the new poetry club, now you must choose which path you want to take!")
  
  let question = prompt("Guard: Front Door or Back Door?");
  // console.log(question);
  
  if (question.includes("ront") == true) { //aici s-a folosit smekerie
    return frontDoorResponse(frontDoorPoem);
  }
  else if (question.includes("ack") == true) {//aici s-a folosit smekerie
    return backDoorResponse(frontDoorPoem);
  }
  else{
    console.log("Guard: Inadequate answear!\nBegone!")
  }
    
  // frontDoorResponse(frontDoorPoem);
  // backDoorResponse(frontDoorPoem);
  
  
  
// console.log(frontDoorResponse(frontDoorPoem)); The "undefined" output is occurring because you are trying to print the result of the frontDoorResponse function,
// which does not have a return value. In the last line of your code, you are calling console.log(frontDoorResponse(frontDoorPoem));, 
// but since the frontDoorResponse function doesn't explicitly return anything, it returns undefined. That's why you see "undefined" in the output.
//Bravo tati mare pizdar.
  
  