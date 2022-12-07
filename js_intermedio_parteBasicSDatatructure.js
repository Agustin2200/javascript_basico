//EJERCICIOS DE JAVASCRIPT INTERMEDIO. SECCION DE ESTRUCTURA DE DATOS BASICO 

//EJERCICIO 1 
let yourArray; // Change this line

yourArray = ['Agustin', 22, true, 30, false];

//EJERCICIO 2 
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray [1] = "Agustin";
// Only change code above this line
console.log(myArray);

//EJERCICIO 3 
function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2, 'three')
    arr.push(7,'VIII',9)
    // Only change code above this line
    return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));

//EJERCICIO 4 
function popShift(arr) {
    let popped = arr.pop(); // Elimina un elemento al final del array
    let shifted = arr.shift(); // Elimina un elemento al principio del array
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

//EJERCICIO 5 
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(0,1);
arr.splice(3,4);
// Only change code above this line
console.log(arr);

//EJERCICIO 6 
function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond');
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

  //EJERCICIO 7
  function forecast(arr) {
    // Only change code below this line
    
    return arr.slice(2,4);
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

  //EJERCICIO 8 
  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr]);
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));

  //EJERCICIO 9 
  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());

  //EJERCICIO 10 
  function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) >= 0){
      return true
    }else {
      return false
    }
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

  //EJERCICIO 11 
  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      if(arr[i].indexOf(elem) == -1){
        newArr.push(arr[i]);
      }
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

  //EJERCICIO 12 
  let myNestedArray = [
    // Only change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array', ['deep']],
    ['mutate', 1327.98, 'splice', 'slice', 'push',[['deeper']]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth',[[['deepest']]]]
    // Only change code above this line
  ];

  //EJERCICIO 13
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Only change code below this line
  foods['bananas'] = 13;
  foods['grapes'] = 35;
  foods['strawberries'] = 27;
  
  
  // Only change code above this line
  
  console.log(foods);

  //EJERCICIO 14 
  let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // Only change code below this line
  userActivity.data.online = 45;
  // Only change code above this line
  
  console.log(userActivity);

  //EJERCICIO 15 
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
    return foods [scannedItem];
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));

  //EJERCICIO 16
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
  // Only change code above this line
  
  console.log(foods);

  //EJERCICIO 17
  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    if("Alan" in userObj && "Jeff" in userObj && "Sarah" in userObj && "Ryan" in userObj){
      return true;
    }else {
      return false;
    }
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));

  //EJERCICIO 18 
  const users2 = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    // Only change code below this line
    let contador = 0;
    for (let user in usersObj) {
      if(usersObj[user].online === true){
        contador = contador +1;
      }
    }
    return contador;
    // Only change code above this line
  }
  
  console.log(countOnline(users2));


//EJERCICIO 19 
let users3 = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(obj);
    // Only change code above this line
  }
  
  console.log(getArrayOfUsers(users3));

  //EJERCICIO 20
  let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line
    userObj.data.friends.push(friend);
    return userObj.data.friends;
    // Only change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));