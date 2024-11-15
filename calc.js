const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout});
function calculate(inputArray) {
    let result = inputArray[0];

    for (let i = 1; i < inputArray.length; i += 2) {
        const operator = inputArray[i];
        const nextNumber = inputArray[i + 1];

        if (typeof operator !== 'string' || !['+', '-', '*', '/'].includes(operator)) {
            throw new Error(`Invalid operator: ${operator}. Valid operators are +, -, *, /.`);
        }

        if (typeof nextNumber !== 'number') {
            throw new Error(`Invalid number: ${nextNumber}. Must be a number.`);
        }

        if (operator === '+') {
            result += nextNumber;
        } else if (operator === '-') {
            result -= nextNumber;
        } else if (operator === '*') {
            result *= nextNumber;
        } else if (operator === '/') {
            if (nextNumber === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            result /= nextNumber;
        }
    }
    return result;
}
function promptUser () {
    rl.question('Enter your calculation (e.g., 10 + 5 * 2): ', (input) => {
        const inputArray = input.split(' ').map((item) => {
            return isNaN(item) ? item : parseFloat(item);});
        try {
            const output = calculate(inputArray);
            console.log("Result:", output);
        } catch (error) {
            console.error(error.message);
        } finally {
            promptUser ();
        }
    });
}
promptUser ();
