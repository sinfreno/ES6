// Ejercicio 1

// function multiply(num1, num2) {
//     return num1 * num2;
//  }

let multiply = (num1, num2) => num1 * num2;
 
//  function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
//  }

let toCelsius = (fahrenheit) => (5/9) * (fahrenheit-32);

 
 // This function returns a string padded with leading zeros
//  function padZeros(num, totalLen) {
//     var numStr = num.toString();
//     var numZeros = totalLen - numStr.length;
//     for (var i = 1; i <= numZeros; i++) {
//        numStr="0" + numStr; 
//        } 
//     return numStr;
//   } 

let padZeros = (num, totalLen) => {
    let numStr = num.toString();
    let numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
       numStr="0" + numStr; 
       } 
    return numStr;
  }
 
//  function power(base, exponent) { 
//     var result=1; 
//     for (var i=0; i < exponent; i++) { 
//           result *=base; 
//     } 
//     return result;
//  }
 
let power = (base, exponent) => { 
    var result=1; 
    for (var i=0; i < exponent; i++) { 
          result *=base; 
    } 
    return result;
 } 
 
//  function greet(who) {
//      console.log("Hello " + who);
//  }

 let greet = who => console.log("Hello " + who);

//  Ejercicio 2

// users.map(function (user) {
//     user.firstName;
//  });
 
 var users = 
 [{ firstName: 'Homer', lastName: 'Simpson' },
 { firstName: 'Marge', lastName: 'Simpson' },
 { firstName: 'Bart', lastName: 'Simpson' },
 { firstName: 'Lisa', lastName: 'Simpson' },
 { firstName: 'Maggie', lastName: 'Simpson' }];

 let firstName = (name) => {
     firstName = [name.firstName];
        return firstName;
 }

console.log(users.map(firstName));

// Ejercicio 3


var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const reducer = (accumulator, currentValue) => accumulator + ' ' + currentValue;
console.log(epic.reduce(reducer));


//  Ejercicio 4

let reversed = (words) => {
    let gnirts = [...words];
    let word = gnirts.reverse();
    console.log(word.join(''));
}

// Ejercicio 5

// function b() {
//     // ...
//  }
//  funtion a() {
//     b().then() = > {
//     doMoreWork();
//     }
//  }

function b() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }

 async function a(frase) {
    await b();
    doMoreWork(frase);
  }

function doMoreWork(c) {
    console.log(c);
}

// Ejercicio 6

var tasks = [
    {
       'name' : 'Start React web',
       'duration' : 120
    },
    {
       'name' : 'Work out',
       'duration' : 60
    },
    {
       'name' : 'Procrastinate on facebook',
       'duration' : 240
    }
    ];

let mapa = tasks.map(function(x){
  return x;
});

let tareas = [];
mapa.forEach(nombres);

function nombres(item) {
    tareas.push(item.name);
}

console.log(tareas);


 