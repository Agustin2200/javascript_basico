//EJERCICIO ES6 

//EJERCICIO 1 
function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}
//EJERCICIO 2
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Using s = [2, 5, 7] would be invalid
    return s;
  // Only change code above this line
}
editInPlace();

//EJERCICIO 3
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
  const PI = freezeObj();

//EJERCICIO 4
const magic = () => {
    return new Date();
  };
//EJERCICIO 5 
const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));
//EJERCICIO 6
const increment = (number, value = 1) => number + value;

//EJERCICIO 7
const sum = (...args) => {
    //const args = [];
    return args.reduce((a,b) => a + b, 0);
  }

//EJERCICIO 8 
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

//EJERCICIO 9 
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  //const today = HIGH_TEMPERATURES.today;
  //const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
  // Only change code above this line
  
  const {today, tomorrow} = HIGH_TEMPERATURES; 

//EJERCICIO 10 
const HIGH_TEMPERATURES2 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
   
  //const highToday = HIGH_TEMPERATURES.today;
  //const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
  
  const {today : highToday, tomorrow : highTomorrow} = HIGH_TEMPERATURES2;

//EJERCICIO 11 
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  const {today: {low : lowToday, high: highToday2 }} = LOCAL_FORECAST ;

//EJERCICIO 12 
let a = 8, b = 6;
// Only change code below this line
[b,a] = [a,b];

//EJERCICIO 13 
function removeFirstTwo(list) {
    // Only change code below this line
    const [a,b,...shorterList] = list;
    // Only change code above this line
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);

//EJERCICIO 14 
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max,min}) => (max + min) / 2.0; 
// Only change code above this line

//EJERCICIO 15 
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line
  for (let i =0; i < arr.length; i++){
    failureItems[i] = (`<li class="text-warning">${arr[i]}</li>`)
  }
  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList)

//EJERCICIO 16 
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {name,age,gender
  };
  // Only change code above this line
};

//EJERCICIO 17 
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

//EJERCICIO 18 
// Only change code below this line
class Vegetable {
  constructor(name){
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

//EJERCICIO 19 
class Thermostat{
  constructor(temperatura){
    this.temperatura = temperatura;
  }
  //Get 
  get temperature (){
    return 5/9 * (this.temperatura - 32)
  } 
  //Set 
  set temperature (temp){
    this.temperatura = temp * 9.0 / 5 + 32
  }

}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

//EJERCICIO 20
{/* <html>
  <body>
    <!-- Only change code below this line -->
  <script type="module" src = "index.js"></script>
    <!-- Only change code above this line -->
  </body>
</html> */}

//EJERCICIO 21 
export{uppercaseString,lowercaseString}
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

//EJERCICIO 22 
import {uppercaseString, lowercaseString} from './string_functions.js';
uppercaseString("hello");
lowercaseString("WORLD!");

//EJERCICIO 23 
import * as stringFunctions from "./string_functions.js" 
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//EJERCICIO 24 
export default function subtract(x, y) {
  return x - y;
}

//EJERCICIO 25 
import subtract from './math_functions.js'
// Only change code above this line

subtract(7,4);

//EJERCICIO 26 
const makeServerRequest = new Promise ((resolve, reject) => {

});

//EJERCICIO 27 
const makeServerRequest2 = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

//EJERCICIO 28 
const makeServerRequest3 = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest3.then(result => {
  console.log(result)
});

//EJERCICIO 29 
const makeServerRequest4 = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest4.then(result => {
  console.log(result);
});

makeServerRequest4.catch(error => {
  console.log(error);
});








