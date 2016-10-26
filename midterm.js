
//1.
var temperature = 6;

if (temperature > 5) {
  console.log('temperature is higher than 5.');
} else {
  console.log('temperature is lower than 5.');
}

//general example
if (condition) {
  //execute if truthy
}

//2.

for (var i = 1; i < 11; i++) {
  console.log(i);
}

//this loop runs up to 10 because JavaScript start count at 0.
//general example

for (startWithAVarible; endCondition; iterator) {
  //execute this block of code in each loop
}

//3a.

var myFunction = function () {
  console.log('Hello World');
};

//This is a named function, it is not being called. It has a string inside that will display if the function is
//being called, and also undefined (by default).

//general ex:
function functionName (parameter1, parameter2) {
  //block that gets executed
}

//3b.

var myFunction = function () {
  console.log('Hello World');
};

myFunction();

//First we need to define the function and then call it.
//if we call it myFunction(); it returns what's inside the function and also undefined.

//4a.

var stringEmpty = '';
var string = 'Marie';

//4b.

true && true --> true
false || true --> true
false && true --> false

// 4c.
var number = 1;

//5.

var emptyArray = [];

//5b.

var array = [1, 2, 3];


//6.

var emptyObject = {};

//6b.

var object = {
  name: 'Marie',
  lastName: 'Treschow',
  age: 25
};

//6c.

var objectWithFunction = {
  name: 'Marie',
  lastName: 'Treschow',

  getName: function() {
    return name + lastName;
  },

  getFirstName: function() {
    return name;
  }
};

//6d.

 objectWithFunction.middelName = 'Birgitta';

 //6e.

 objectWithFunction[middelName] = 'Birgitta';

 //6f.
 //When using the brackets we need for it to be a string. The dot notation is more reliable.

 //6g.

 //Now you get my full name printed ten times.

 for (var i = 0; i < 11; i++) {
   console.log(objectWithFunction.name + " " + objectWithFunction.lastName);
 }

 //general ex:  for (var key in yourObject) yourObject[key]}


 //7.

 //8.

 var array = ['apple', 'orange', 'pineapple'];

 function findIndex(param) {

   var index = -2;

   for (var i = 0; i < array.length; i++) {
     if (array[i] === param) {
       index = i;
     }
   }

    return index;
 }

findIndex('apple');
findIndex('orange');
findIndex('pineapple');

//9.

var array = ['apple', 'orange', 'orange', 'pineapple'];


function findIndexes(param) {
  var foundValue = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] === param) {
      foundValue.push(i);
    }
  }

  if (foundValue.length > 0) {
    return foundValue;
  } else {
    return -1;
  }
}

findIndexes('apple');
findIndexes('orange');
findIndexes('pineapple');
findIndexes('random');
