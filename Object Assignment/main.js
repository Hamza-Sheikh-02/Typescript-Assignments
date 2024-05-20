"use strict";
/*          Part 1: Employee Data           */
Object.defineProperty(exports, "__esModule", { value: true });
let car = {
    engine: {
        horsePower: 200
    }
};
function getHorsePower(car) {
    return car.engine.horsePower;
}
console.log(`The Horse Power of Car is ${getHorsePower(car)}`);
let product = {
    name: "T-Shirt",
    price: 500,
    color: "Green",
    inventory: {
        stock: 10,
        colorOptions: ["Red", "Blue", "Green", "Yellow", "Orange"],
        changeColor: function (newColor) {
            if (this.colorOptions?.includes(newColor)) {
                product.color = newColor;
                if (newColor === "Red") {
                    product.price *= 1.1;
                }
                else if (newColor === "Blue") {
                    product.price *= 0.95;
                }
                else {
                    product.price = 500;
                }
            }
            else {
                console.log("Color not available in options");
            }
        }
    }
};
