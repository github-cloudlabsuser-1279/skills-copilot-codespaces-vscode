class Calculator {
    // Constructor
    constructor() {
        this.result = 0;
    }

    // Addition
    add(a, b) {
        return a + b;
    }

    // Subtraction
    subtract(a, b) {
        return a - b;
    }

    // Multiplication
    multiply(a, b) {
        return a * b;
    }

    // Division
    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }

    // Square Root
    sqrt(a) {
        if (a < 0) {
            throw new Error("Square root of negative number is not allowed.");
        }
        return Math.sqrt(a);
    }

    // Power
    power(a, b) {
        return Math.pow(a, b);
    }
}

// Example usage
const calc = new Calculator();

console.log("Addition: 5 + 3 =", calc.add(5, 3));
console.log("Subtraction: 5 - 3 =", calc.subtract(5, 3));
console.log("Multiplication: 5 * 3 =", calc.multiply(5, 3));
console.log("Division: 6 / 3 =", calc.divide(6, 3));
console.log("Square Root: sqrt(16) =", calc.sqrt(16));
console.log("Power: 2^3 =", calc.power(2, 3));