import inquirer from "inquirer";
import chalk from "chalk";

// Task 1 :
// Miles-to-Kilometers Converter (Operators):

console.log(chalk.blue(chalk.bgYellow("Task 1 : Miles-to-Kilometers Converter (Operators)")));

let miles: number = 130;
let kilometers: number = miles * 1.60934;
console.log(`The distance of 130 miles is equal to ${kilometers} kms`);

// Task 2 :
// Evaluating a number game:

console.log(chalk.blue(chalk.bgYellow("Task 2 : Evaluating a number game")));

let dynamicNumber: number = Math.floor(Math.random() * 5 + 1);

let userNumber = await inquirer.prompt ([
    {
        name: "userNumber",
        type: "number",
        message: "Enter a number between 1 and 5:"
    }
]);

if (userNumber.userNumber > dynamicNumber) {
    console.log("Your number is greater than the dynamic number value.");
} else if (userNumber.userNumber < dynamicNumber) {
    console.log("Your number is less than the dynamic number value.");
} else {
    console.log("Your number is equal to the dynamic number value.");
}

// Task 3 :
// Friend checker game:

console.log(chalk.blue(chalk.bgYellow("Task 3 : Friend checker game")));

const friends: string[] = ["Zayan", "Shaheer", "Hasan", "Usman", "Mubhashir", "Syed"];

function checkFriend(name: string): boolean {
    return friends.includes(name);
}

let userInput = await inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter a name:',
        },
    ]).then((answers) => {
        const name = answers['name'];
        switch (checkFriend(name)) {
            case true:
                console.log(`${name} is friend!`);
                break;
            default:
                console.log("Sorry, I don't know this person.");
                break;
        }
    });

// Task 4 :
// Functions :

console.log(chalk.blue(chalk.bgYellow("Task 4 : Functions")));

function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

const number1: number = 10;
const number2: number = 20;

console.log("Result of the first call:", addNumbers(number1, number2));

const newNumber1: number = 5;
const newNumber2: number = 7;

console.log("Result of the second call:", addNumbers(newNumber1, newNumber2));

// Task 5 :
// Calculator project using functions :

console.log(chalk.blue(chalk.bgYellow("Task 5 : Calculator project using functions")));

function calculate(num1: number, num2: number, operator: string): number {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        default:
            throw new Error('Invalid Operator!');
    }
}

let operand1: number = 10;
let operand2: number = 5;

let operator: string = '+';

console.log(`Result of ${operand1} ${operator} ${operand2} is:`, calculate(operand1, operand2, operator));

operator = '-';
console.log(`Result of ${operand1} ${operator} ${operand2} is:`, calculate(operand1, operand2, operator));

// Task 6 :
// Anonymous functions

console.log(chalk.blue(chalk.bgYellow("Task 6 : Anonymous functions")));

const printArgument = function(argument: any) {
    console.log(argument);
};

printArgument("Hello, world!");

function printArgumentFunction(argument: any) {
    console.log(argument);
}

printArgumentFunction("Hello , world! again.");
