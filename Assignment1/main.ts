// Question no 1
// Write a javascript function that accepts a string as a parameter and counts the number of vowels within the string.

function countVowels(str: string) {
    str = str.toLowerCase();
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    let count = 0;
    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

const inputString = "Hello World";
console.log(countVowels(inputString));

// Question no 2
// Write a javascript function that accepts a number as a parameter and checks whether it is prime or not using recursion.

function isPrime(num: number, divisor: number = 2) {
    if (num <= 2) {
        return (num === 2);
    }
    if (num % divisor === 0) {
        return (num === divisor);
    }
    if (divisor * divisor > num) {
        return true;
    }

    return isPrime(num, divisor + 1);
}

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(11));

// Question no 3
// Write a javascript function to find the first not repeated character.

function firstNonRepeatedCharacter(str: string) {
    const charCount: { [char: string]: number } = {};
    
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null;
}

console.log(firstNonRepeatedCharacter("hello"));
console.log(firstNonRepeatedCharacter("aabbcccddeeffg"));
console.log(firstNonRepeatedCharacter("aabbcc"));

// Question no 4
// Write a function that returns the square of a number

function square(num: number) {
    return num * num;
}

console.log(square(4));
console.log(square(9));

// Question no 5
// Function `displayMessage()` prints "Hello World"
// string using console.log() function

function displayMessage() {
    console.log("Hello World");
}

displayMessage();
