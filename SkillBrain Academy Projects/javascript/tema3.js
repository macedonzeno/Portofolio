
//Ex 1

function recipe(title, portions, ingredients) {

    this.title = title;
    // console.log(recipe.title);
    
    this.portions = portions;
    // console.log(recipe.portions);
    
    this.ingredients = ingredients;
    // console.log(recipe.ingredients);
  
    // console.log(recipe);
  }
  
  const reteta = new recipe("Pizza", 3 , ["sunca", "cas", "ketchup"])
  console.log(reteta);
  
  console.log(reteta.title);
  console.log(reteta.portions);
  console.log(reteta.ingredients);
  
  for (let key in reteta) {
    console.log(`${key} = ${reteta[key]}`);
  }
  
  // Ex 2:
  
  const removeParameter = (obj,proprietate) => {
    delete obj[proprietate];
    console.log(obj);
  }
  
  removeParameter({ a: 1, b: 2 },'b')
  
  //Ex 3: 

  let displayBooks = (books) => {
    for (i = 0; i < books.length; i++){
        let book = books[i];
        let {titlu, autor, esteCitita} = book;

        console.log(`Ai citit deja " ${titlu}" de ${autor}`);

        if (esteCitita) {
            console.log(`Ai citit deja "${titlu}" de ${autor}`);
        } else {
            console.log(`Trebuie sa citesti "${titlu}" de ${autor} `)
        }
    }
  }

  let books = [
    {
        titlu: "carte 1",
        autor: "autor 1",
        esteCitita: true,
    },
    {
        titlu: "carte 2",
        autor: "autor 2",
        esteCitita: false,
    },
    {
        titlu: "carte 3",
        autor: "autor 3",
        esteCitita: true,
    },
    {
        titlu: "carte 4",
        autor: "autor 4",
        esteCitita: false,
    },
    {
        titlu: "carte 5",
        autor: "autor 5",
        esteCitita: false,
    },

  ]

  displayBooks(books);