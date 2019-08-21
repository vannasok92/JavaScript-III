/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: it refers to object of function in the global scope,

* 2. Implicit Binding: it refers to object at the left side of dot when the function is invoked.

* 3. New Binding: it refers to the instance object of the constructor function is used. 

* 4. Explicit Binding: when javascript call and apply methods is used.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
'use strict';

function fun(emoji){
    console.log('this is: '+ emoji);
    console.log(this);
}
fun(':)');

// Principle 2
// code example for Implicit Binding

const person1 ={
    name: 'Sam',
    age: 30,
    speak: function (){
      return `${this.name} is ${this.age} years old`
    }//function
  };
  console.log(person1.speak());

// Principle 3
// code example for New Binding

function Greeting(saying){
    this.greet = saying;
}
let newGreeting = new Greeting("hello world");
console.log(newGreeting.greet);

// Principle 4
// code example for Explicit Binding

function petSound (){
    console.log(`${this.name} say ${this.makesound}`);
  }
  const pet ={
    name: 'lulu',
    specie: 'cat',
    makesound: " meow",
  };
  petSound.call(pet);

