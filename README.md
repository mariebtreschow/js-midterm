Instructions:

- Add your answers inline to the markdown file.
- Use your own words.
- Come up with an answer from memory. Write it down, even if the answer is "I don't know."
- Then, we will go over the answers in class. Write down your revised answer below your original answer.

---
### Part 1: Control Flow - 15 minutes

1. Draw a diagram of an if statement. Name each of the components and how they work together.

var temperature = 6;

if (temperature > 5) {
  console.log('temperature is higher than 5.');
} else {
  console.log('temperature is lower than 5.');
}

define a variable and assign a value, make an if statement to check if it is for example higher or lower value - the condition. Depending on the value, it will either stop here and console.log or it will continue and go tho the else statement and console.log that value.
Can also check, true or false etc.


//

if (condition) {
  //execute if truthy
}

2. Draw a diagram of a for loop. Describe each of its components. Indicate the order in which they are executed / evaluated.

for (var i = 1; i < 10; i++) {
  console.log(i);
}

this for loop will start at 1 (variable i start at 1), and then increase by 1 (++) each it up until the end condition 10 (i < 1).

//

for (startWithAVarible; endCondition; iterator) {
  execute this block of code in each loop
}

3. Functions
 - 3a. Draw a diagram of a function. Describe each of its components and what each component does. Specify which of them are optional.

var myFunction = function () {
  console.log('Hello World');
};

This is a named function, it is not being called. It has a string inside that will display if the function is
being called, and also undefined (by default).

function functionName (parameter1, parameter2) {
  //block that gets executed
}

//name, parameter and returning something is optional

 - 3b. Draw a diagram of a function being called, showing the instruction execution order.

 var myFunction = function () {
   console.log('Hello World');
 };

myFunction();

First we need to define the function and then call it.
if we call it myFunction(); it returns what's inside the function and also undefined.


---
### Part 2: Data Types - 10 minutes

4. Primitive Data Types
 - 4a. Give an example of an empty string and a non-empty string.

 var string = '';
 var stringTwo = 'Marie';

 - 4b. Give an example of a boolean.
 && || %

 true && true --> true
 false || true --> true
 false && true --> false

 - 4c. Give an example of a Number.
 var number = 1;

5. Arrays
 - 5a. Give an example of an empty array.

 var emptyArray = [];

 - 5b. Give an example of an array with three elements in it.

 var array = [1, 2, 3];

 - 5c. How do you add another element to this array?

array.push[4];

 - 5d. How do you get the length of this array?

 array.length

 - 5e. Show how to iterate through the array using a loop.

var array = [1, 2, 3];
for (var i = 0; i < 4; i++) {
  console.log(array[i]);
}

6. Objects
 - 6e. Give an example of an empty object.

 var emptyObject = {};

 - 6b. Give an example of an object with three keys and three values.

var object = {
  name: 'Marie',
  age: 24,
  lastName: 'Treschow'
 };

 - 6c. Give an example of an object with two keys and two functions as values.

 var objectWithFunction = {

   name: 'Marie',
   lastName: 'Treschow',

   getName: function() {
     return name + lastName;
   },

   getFirstName: function() {
     return name;
   },

 };

 - 6d. Describe one way of adding a key to an object.

 objectWithFunction.middelName = 'Birgitta';

 - 6e. Describe the other way of adding a key to an object.

objectWithFunction.[middelName] = 'Birgitta';

 - 6f. Explain the difference between these two ways, and when it is appropriate to use each way.

When using the brackets we need for it to be a string. The dot notation is more reliable.

 - 6g. Describe how to iterate though an object using a loop.

var getName = function() {
  for (var i = 0; i < 10; i++) {
    console.log(objectWithFunction.name + " "+ objectWithFunction.lastName);
  }
};


for (var key in yourObject)
  yourObject[key]
}

Now you get my full name printed ten times.
---
### Part 3: Algorithms - 20 minutes

7. What is an algorithm?

8. For the following problem, first write down how exactly to solve the problem in English. Once you are able to describe it in English, translate it into code.

```js
// Given an array of values, write a function that finds the index of where the value is located, and if nothing is found, returns -1.
// Do not use the indexOf function.
// example: for ['apple', 'orange', 'pineapple']
	// 'orange' returns '1'
	// 'durian' returns '-1'
```

```js

var array = ['apple', 'orange', 'pineapple'];

function indexOf(parameter) {

  var foundIndex = -1;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === parameter) {
      foundIndex = i;
    }
  }

    return foundIndex;
}

indexOf('apple')
indexOf('orange')
indexOf('pineapple')

```

--> Then put in the parameter 'apple' to get the index of that parameter


Maybe try to assign value to apple, orange and pineapple (0, 1, 2) and it these are true while going through
the for loop, returning the index.
We need a for loop, and to if statements, first if and then else.

var food = ['apple', 'orange', 'pineapple'];
var index = [0, 1, 2];

var findFoodIndex = function(food, index) {

var foodIndex = food.length;

  for (var i = 0; i < 3; i++) {
    if (foodIndex[i]===index[i]) {
      return food[i];
    } else {
      return '-1';
    }
  }  
};

I know this one does not work.


9. Again, for the following problem, first write down how exactly to solve the problem in English. Once you are able to describe it in English, translate it into code.

```js
// Write a function that finds all the indexes of where the value is located and returns them in an array, and if nothing is found, returns -1
// example: ['apple', 'orange', 'orange', 'pineapple']
	// 'orange' returns [1,2]
```
```js


```

```js
// IZEL ANSWER


var array = ['apple', 'orange', 'orange', 'pineapple'];

findIndexes('apple')
findIndexes('orange')
findIndexes('pineapple')
findIndexes('awesomeness')

function findIndexes(parameter) {
  var foundValue = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] === parameter) {
      foundValue.push(i);
    }
  }

  if (foundValue.length > 0) {
    return foundValue;
  } else {
    return -1;
  }
}
```
