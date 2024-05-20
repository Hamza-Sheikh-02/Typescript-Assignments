import inquirer from "inquirer";

/*          Part 1: Basic Arrays - Product Inventory        */

type Product = {
    name: string;
    price: number;
    inventory: {
        stockNumber: number;
    }
    colorOptions: string[];
}

let products: Product[] = [
    {
        name: "Shirt",
        price: 500,
        inventory: {
            stockNumber: 10
        },
        colorOptions: ["red", "blue", "green"]
    },
    {
        name: "Pant",
        price: 400,
        inventory: {
            stockNumber: 8
        },
        colorOptions: ["black", "white", "blue"]
    },
    {
        name: "Shoes",
        price: 600,
        inventory: {
            stockNumber: 6
        },
        colorOptions: ["black", "white", "red"]
    }
]

let newColor = await inquirer.prompt([
    {
        type: "list",
        name: "newColor",
        message: "Enter new color:",
        choices: ["grey", "yellow", "cyan", "purple", "brown"]
    }
]);

function changeColor(product: Product, newColor: any) {
    product.colorOptions.push(newColor);
    if (newColor === "grey") {
        product.price += product.price * 0.2;
    } else if (newColor === "yellow") {
        product.price -= product.price * 0.5;
    } else if (newColor === "cyan") {
        product.price += product.price * 0.8;
    } else if (newColor === "purple") {
        product.price -= product.price * 0.6;
    } else if (newColor === "brown") {
        product.price += product.price * 0.9;
    }
}


function displayProducts(products: Product[]) {
    products.forEach(product => {
        console.log(`Name: ${product.name}`);
        console.log(`Price: $${product.price}`);
        console.log(`Stock: ${product.inventory.stockNumber}`);
        console.log(`Available Colors: ${product.colorOptions.join(', ')}`);
        console.log('---');
    });
}

displayProducts(products);


/*          Part 2: Multi-Dimensional Arrays and Tuples - Student          */

type Student = {
    name: string;
    grades: number[];
};
  
const students: Student[] = [
    {
      name: "Hamza",
      grades: [95, 85, 90],
    },
    {
      name: "Kabeer",
      grades: [80, 65, 90],
    },
    {
      name: "Usman",
      grades: [75, 70, 85],
    },
];
  
function calculateAverageGrade(student: Student): number {
    let sum = 0;
    for (const grade of student.grades) {
      sum += grade;
    }
    return sum / student.grades.length;
}
  
function displayStudentGrades(students: Student[]) {
    students.forEach((student) => {
        const averageGrade = calculateAverageGrade(student);
        console.log(`Name: ${student.name}, Average Grade: ${averageGrade.toFixed(2)}`);
    });
}
  
displayStudentGrades(students);


/*          Part 3: Array with Types and Indexing - Employee           */

type Employee = {
    name: string;
    hoursWorked: number;
    hourlyRate: number;
    salary: number;
}

let employees: Employee[] = [
    {
        name: "Hamza",
        hoursWorked: 21,
        hourlyRate: 12,
        salary: 252
    },
    {
        name: "Kabeer",
        hoursWorked: 19,
        hourlyRate: 10,
        salary: 190
    },
    {
        name: "Usman",
        hoursWorked: 16,
        hourlyRate: 8,
        salary: 128
    }
]

function calculateSalary(employee: Employee) {
    let employeeSalary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked > 20) {
        employeeSalary += employeeSalary * 10;
    }
    return employeeSalary;
}

function displayEmployees(employees: Employee[]) {
    employees.forEach(employee => {
        const employeeSalary = calculateSalary(employee);
        console.log(`Name: ${employee.name}, Salary: $${employeeSalary}`);
    });
}

displayEmployees(employees);
