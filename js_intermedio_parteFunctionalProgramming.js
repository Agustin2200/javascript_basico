//PROGRAMACION FUNCIONAL 

//EJERCICIO 1

/*
const prepareTea = () => 'greenTea';
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC);*/

// EJERCICIO 2 
/*
const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';


const getTea2 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea2(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea2(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

//EJERCICIO 3
// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function(index) {
  
    // Only change code below this line
  
    const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  
    // Only change code above this line
  
    return this;
   };
  
  // Let's create three browser windows
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  
  // Now perform the tab opening, closing, and other operations
  const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);


  //EJERCICIO 4 
  // The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line

  return fixedValue + 1;
  // Only change code above this line
}

//EJERCICIO 5 
// The global variable
let fixedValue2 = 4;

// Only change code below this line
function incrementer(valor) {

  return valor +1; 
  // Only change code above this line
}
*/
//EJERCICIO 6 

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

//let lista = bookList.slice();
// Change code below this line
function add(lista,bookName) {
  //const lista  = bookList.slice;
  let aux = [...lista];
  aux.push(bookName);
  return aux;
  
  // Change code above this line
}

// Change code below this line
function remove(lista,bookName) {
 // const lista = bookList.slice;
 let aux = [...lista];
  const book_index = aux.indexOf(bookName);
  if (book_index >= 0) {

    aux.splice(book_index, 1);
    return aux;

    // Change code above this line
    }
}

//EJERCICIO 7 
// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

const ratings = watchList.map(watchList => ({title: watchList.Title, rating: watchList.imdbRating}));
//for (let i = 0; i < watchList.length; i++) {
  //ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
//}

// Only change code above this line

console.log(JSON.stringify(ratings)); 

//EJERCICIO 8 

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach(elemento => newArray.push(callback(elemento)))
  
  // Only change code above this line
  return newArray;
};

//EJERCICIO 9 
// SE UTILIZA LA VARIABLE GLOBAL WATCHLIST DE LOS EJERCICIOS ANTERIORES 


// Only change code below this line

const filteredList = watchList.filter(watchList => parseFloat(watchList.imdbRating) > 8.0).
map(watchList => ({title: watchList.Title, rating: watchList.imdbRating}));

// Only change code above this line

console.log(filteredList);

//EJERCICIO 10 
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (Boolean(callback(this[i])) === true) {
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};
//EJERCICIO 11
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line

  return anim.slice(beginSlice, endSlice);
  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

console.log(sliceArray(inputAnim, 1, 3));
//EJERCICIO 12 
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.slice(0,3);

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

//EJERCICIO 13 
function nonMutatingConcat(original, attach) {
  // Only change code below this line

  return original.concat(attach);
  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);

//EJERCICIO 14 
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);

  // Only change code above this line
}

const first2 = [1, 2, 3];
const second2 = [4, 5];
nonMutatingPush(first, second);

//EJERCICIO 15 
// Se utiliza la variable global watchList de los antiguos ejercicios 


function getRating(watchList) {
  // Only change code below this line
  let averageRating;
  let filtro;
  filtro = watchList.filter(watchList => watchList.Director === "Christopher Nolan").
  map(watchList => parseFloat(watchList.imdbRating)); //Cree una nueva variable solo para verificar y que
  // se me sea mas facil ver los elementos con los que hay que operar 

  averageRating = filtro.reduce((suma, rating) => suma + rating)/ filtro.length;
 
 
  // Only change code above this line
  return averageRating;
}

console.log(getRating(watchList));

//EJERCICIO 16
const squareList = arr => {
  // Only change code below this line
  arr = arr.filter(numero => Number.isInteger(numero) && numero > 0).map(numero => numero * numero)
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

//EJERCIOCIO 17
function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort(function(a,b){
    return a === b ? 0 : a < b? -1 : 1;
  });
  
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


//EJERCICIO 18
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let arregloVacio = [];
  arregloVacio = arregloVacio.concat(arr);
  return arregloVacio.sort(function(a,b){
    return a-b;
  })

  // Only change code above this line
}

nonMutatingSort(globalArray);

//EJERCICIO 19 
function splitify(str) {
  // Only change code below this line

  return str.split(/\W/);
  // Only change code above this line
}

splitify("Hello World,I-am code");

//EJERCICIO 20 
function sentensify(str) {
  // Only change code below this line

  return str.split(/\W/).join(" ");    
  // Only change code above this line
}

sentensify("May-the-force-be-with-you");

//EJERCICIO 21 
// Only change code below this line
function urlSlug(title) {
  return title.split(" ").filter(cadena => cadena !== "").join ("-").toLowerCase();
}
// Only change code above this line
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));

//EJERCICIO 22
function checkPositive(arr) {
  // Only change code below this line

  return arr.every(function(valor){
    return valor > 0;
  });
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);

//EJERCICIO 23 
function checkPositive(arr) {
  // Only change code below this line

  return arr.some(function(valor){
    return valor > 0;
  });
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);

//EJERCICIO 24 
function add(x) {
  // Only change code below this line
  return function (y){
    return function (z){
      return x + y +z;
    }
  }
  // Only change code above this line
}

add(10)(20)(30);


