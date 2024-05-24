"use strict";
/*          Assignment 1: Building Your Friend List             */
Object.defineProperty(exports, "__esModule", { value: true });
const people = {
    friends: [],
};
const friend1 = {
    firstName: "Usman",
    lastName: "Sheikh",
    id: 8
};
const friend2 = {
    firstName: "Zayan",
    lastName: "Ali",
    id: 13
};
const friend = {
    firstName: "Ahmad",
    lastName: "Khan",
};
people.friends.push(friend1, friend2, friend);
console.log(people, "\n");
/*              Assignment 2: Manipulating an Array: Rearranging Words               */
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
const stringArray = scrambledArray.map(element => element.toString());
const finalArray = [];
finalArray.push(stringArray.pop(), stringArray.splice(stringArray.indexOf("am"), 1)[0], stringArray.splice(stringArray.indexOf("a"), 1)[0], stringArray.shift(), stringArray.shift(), stringArray.pop());
const finalSentence = finalArray.join(" ");
console.log(finalSentence, "\n");
/*              Assignment 3: Company Product Catalog               */
const inventory = [];
const product1 = {
    name: "iPhone",
    model: "15 Pro Max",
    price: 1200,
    quantity: 25
};
const product2 = {
    name: "Samsung",
    model: "S24 Ultra",
    price: 900,
    quantity: 30
};
const product3 = {
    name: "Google",
    model: "Pixel 8 Pro",
    price: 850,
    quantity: 40
};
inventory.push(product1, product2, product3);
console.log(`Quantity of the second product (${inventory[1].name}):`, inventory[1].quantity, "\n");
console.log("Complete inventory:", inventory, "\n");
console.log(`Model of the third product (${inventory[2].name}):`, inventory[2].model);
console.log(`Cost of the first product (${inventory[0].name}):`, inventory[0].price, "\n");
const students = [
    { name: "Hamza", isSenior: true, hasCompletedAssignments: true },
    { name: "Kabeer", isSenior: false, hasCompletedAssignments: false },
    { name: "Usman", isSenior: true, hasCompletedAssignments: false },
    { name: "Ali", isSenior: true, hasCompletedAssignments: true },
    { name: "Bilal", isSenior: false, hasCompletedAssignments: true }
];
function findSeniorStudentsWithAssignments(students) {
    return students.filter(student => student.isSenior && student.hasCompletedAssignments);
}
function removeStudentsWithoutAssignments(students) {
    return students.filter(student => student.hasCompletedAssignments);
}
const updatedClassList = removeStudentsWithoutAssignments(students);
console.log("Updated class list (only students who completed their assignments):", updatedClassList);
