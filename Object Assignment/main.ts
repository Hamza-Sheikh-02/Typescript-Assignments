/*          Part 1: Employee Data           */

type Employee = {
    name: string,
    department: string,
    role: "Manager" | "Engineer" | "Intern",
    skills?: string[],
    contact: {
        phone?: number,
        email?: string,
    }
}


/*          Part 2: Car Details             */

type Car = {
    engine: {
        horsePower: number,
    }
}

let car: Car = {
    engine: {
        horsePower: 200
    }
};

function getHorsePower (car: Car) {
    return car.engine.horsePower;
}

console.log(`The Horse Power of Car is ${getHorsePower(car)}`);


/*           Part 3: Colorful T-Shirts        */

type Product = {
    name: string;
    price: number;
    color: string;
    inventory: {
        stock: number;
        colorOptions?: string[];
        changeColor: (newColor: string) => void;
    }
};

let product: Product = {
    name: "T-Shirt",
    price: 500,
    color: "Green",
    inventory: {
        stock: 10,
        colorOptions: ["Red", "Blue", "Green", "Yellow", "Orange"],
        changeColor: function (newColor: string) {
            if (this.colorOptions?.includes(newColor)) {
                product.color = newColor;
                if (newColor === "Red") {
                    product.price *= 1.1;
                } else if (newColor === "Blue") {
                    product.price *= 0.95;
                } else {
                    product.price = 500;
                }
            } else {
                console.log("Color not available in options");
            }
        }
    }
};
