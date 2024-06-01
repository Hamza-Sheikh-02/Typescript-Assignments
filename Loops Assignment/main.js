"use strict";
/*              Creating a Lesson Plan ( Using for loop )             */
Object.defineProperty(exports, "__esModule", { value: true });
let myWork = [];
for (let i = 1; i <= 10; i++) {
    let lesson = {
        name: `Lesson ${i}`,
        status: i % 2 === 1
    };
    myWork.push(lesson);
}
console.log(myWork);
/*              Guessing Game ( Using while loop )              */
const maxValue = 10;
const randomNumber = Math.floor(Math.random() * maxValue) + 1;
let guessCorrect = false;
const userGuesses = [1, 4, 5, 7, 8];
let i = 0;
while (!guessCorrect && i < userGuesses.length) {
    let currentGuess = userGuesses[i];
    console.log(`User guess: ${currentGuess}`);
    if (currentGuess === randomNumber) {
        console.log("Congratulations! You've guessed the correct number.");
        guessCorrect = true;
    }
    else if (currentGuess < randomNumber) {
        console.log("Your guess is low.");
    }
    else {
        console.log("Your guess is high.");
    }
    i++;
}
/*           Counter Incrementer ( Using do while loop )            */
let counter = 0;
const step = 5;
do {
    console.log(`Counter: ${counter}`);
    counter += step;
} while (counter <= 100);
/*          Exploring Objects with for...in Loop              */
const myObject = {
    item1: "value 1",
    item2: "value 2",
    item3: "value 3"
};
for (const property in myObject) {
    const key = property;
    console.log(`${property}: ${myObject[key]}`);
}
/*         Exploring Arrays with Loops ( Using loop )          */
let myArray = [];
for (let i = 1; i <= 10; i++) {
    myArray.push(i);
}
console.log(`Array after population: ${myArray}`);
for (let i = 0; i < myArray.length; i++) {
    console.log(`Index ${i}: Value ${myArray[i]}`);
}
for (const value of myArray) {
    console.log(`Value: ${value}`);
}
