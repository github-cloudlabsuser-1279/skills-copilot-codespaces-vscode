// Function to perform addition
function add(a, b) {
    return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
    return a - b;
}

// Function to perform multiplication
function multiply(a, b) {
    return a * b;
}

// Function to perform division
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// Function to get user input and perform the chosen operation
function calculator() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the first number: ', (num1) => {
        rl.question('Enter the second number: ', (num2) => {
            rl.question('Choose an operation (add, subtract, multiply, divide): ', (operation) => {
                const a = parseFloat(num1);
                const b = parseFloat(num2);
                let result;

                try {
                    switch (operation.toLowerCase()) {
                        case 'add':
                            result = add(a, b);
                            break;
                        case 'subtract':
                            result = subtract(a, b);
                            break;
                        case 'multiply':
                            result = multiply(a, b);
                            break;
                        case 'divide':
                            result = divide(a, b);
                            break;
                        default:
                            console.log('Invalid operation. Please choose add, subtract, multiply, or divide.');
                            rl.close();
                            return;
                    }
                    console.log(`The result is: ${result}`);
                } catch (error) {
                    console.log(error.message);
                }
                rl.close();
            });
        });
    });
}

// Run the calculator
calculator();