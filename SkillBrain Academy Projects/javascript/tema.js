// 1. Returnează un boolean dacă un număr este divizibil cu 10

// Veți crea o funcție care vă va returna un boolean „adevărat” sau „fals” ca rezultat.

// Numărul introdus ar trebui să returneze un „adevărat” doar dacă este divizibil cu 10.

// În caz contrar, programul dvs. ar trebui să returneze un răspuns „fals”.


const esteDivizibil = (numar) => {
    if (numar % 10 === 0) {
      return true;
    }
    else {
      return false;
    }
  }
  
  console.log(esteDivizibil(prompt("Introdu un numar: ")));
  
  // 2. Scrieți o funcție numită tellFortune care:
  
  // primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
  // afișează pe ecran viitorul dvs. în felul următor: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."
  // În rezolvarea problemei, vom încerca să abordăm șirurile templetizate (${variabila} este o variabila.).
  
  const numarCopii = prompt("Cati copii iti doresti?:");
  const numePartener = prompt("Care este numele partenerului tau?:");
  const locatieGeografica = prompt("Care e tara ta preferata?:");
  const locDeMunca = prompt("Ce cariera iti doresti?:");
  
  const fortuneTell = (x, y, z, n) => {
    return console.log("Vei fi un " + x + " in " + y + ", casatorit cu " + z + " si vei avea " + n + " copii.");
  }
  
  // fortuneTell(locDeMunca, locatieGeografica, numePartener, numarCopii);
  
  // 3. Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii
  
  // Veți crea o funcție care va returna un șir de caractere (string) care va reprezenta numele unei zile a săptămânii în raport cu numărul acesteia pe parcursul unei săptămâni.
  
  let day = parseInt(prompt("Please enter a number corresponding for each day of the week: "));
  
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Unknown Day.")
      break;
  }
    