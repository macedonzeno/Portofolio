// Definirea clasei Masina
class Masina {
  constructor(marca, model, culoare, kilometraj) {
    this.marca = marca;
    this.model = model;
    this.culoare = culoare;
    this.kilometraj = kilometraj;
  }

//Metoda de afisare a proprietatilor (getter & "normal")

// afiseazaProprietati() {
//   return `Masina[marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, kilometraj=${this.kilometraj}]`;
//   }
// }
  get proprietati() {
    return `Masina[marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, kilometraj=${this.kilometraj}]`;
  }
}

// Definirea clasei MasinaDeCurse care moștenește clasa Masina
class MasinaDeCurse extends Masina {
  constructor(marca, model, culoare, kilometraj) {
    super(marca, model, culoare, kilometraj);
  }

  participaLaCampionat(pozitiaInCampionat) {
    if (pozitiaInCampionat > 0) {
      console.log(`Am castigat locul ${pozitiaInCampionat}`);
    } else {
      console.log("Nu am castigat niciun premiu");
    }
  }
}

// Funcția main pentru crearea și utilizarea instanțelor
function main() {
  const masina1 = new Masina("VOLVO", "XC-60", "Negru", "234 000");
  const masina2 = new Masina("Mazda", "CX-5", "Verde", "111 000");
  const masina3 = new Masina("Dacia", "BIGGSTER", "Albastru", "20 000");

  console.log(masina1.proprietati);
  console.log(masina2.proprietati);
  console.log(masina3.proprietati);

  // console.log(masina1.afiseazaProprietati());
  // console.log(masina2.afiseazaProprietati());
  // console.log(masina3.afiseazaProprietati());

  const masinaDeCurse1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000);
  const masinaDeCurse2 = new MasinaDeCurse("Ford", "Rapid", "Alb", 80000);

  masinaDeCurse1.participaLaCampionat(2);
  masinaDeCurse2.participaLaCampionat(-1);
}

// Apelarea funcției main pentru a crea și utiliza instanțele
main();
