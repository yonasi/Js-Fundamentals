# JS-Fundamentals

This repository contains a collection of JavaScript scripts designed to practice fundamental programming concepts. Each script focuses on specific tasks to demonstrate basic JavaScript syntax, logic, and functionality using Node.js. The scripts adhere to specific constraints, such as avoiding the use of `var`, using `console.log` for output, and implementing specific logic like loops or recursion where required.

## Repository Structure

- GitHub repository: `JS-Fundamentals`
- All scripts are written in JavaScript and intended to be run with Node.js.
- Each file corresponds to a specific task as outlined below.

## Tasks and Files

Below is a list of the tasks and their corresponding JavaScript files:

1. **0-javascript_is_amazing.js**
   - Description: Prints "JavaScript is amazing" using a constant variable `myVar`.
   - Constraints: Must use `const`, cannot use `var`.

2. **1-multi_languages.js**
   - Description: Prints three lines: "C is fun", "Python is cool", and "JavaScript is amazing".
   - Constraints: Must use `console.log` for output, cannot use `var`.

3. **2-arguments.js**
   - Description: Prints a message based on the number of arguments passed:
     - No arguments: "No argument"
     - One argument: "Argument found"
     - Multiple arguments: "Arguments found"
   - Constraints: Must use `console.log`, cannot use `var`, uses `process.argv`.

4. **3-value_argument.js**
   - Description: Prints the first argument passed to the script, or "No argument" if none is provided.
   - Constraints: Must use `console.log`, cannot use `var` or `length`.

5. **4-concat.js**
   - Description: Prints two arguments in the format "<arg1> is <arg2>", handling undefined arguments.
   - Constraints: Must use `console.log`, cannot use `var`.

6. **5-to_integer.js**
   - Description: Prints the first argument as an integer in the format "My number: <integer>", or "Not a number" if it cannot be converted to an integer.
   - Constraints: Must use `console.log`, cannot use `var` or `try/catch`.

7. **6-multi_languages_loop.js**
   - Description: Prints three lines ("C is fun", "Python is cool", "JavaScript is amazing") using an array and a loop.
   - Constraints: Must use `console.log`, cannot use `var` or `if/else`, must use a loop.

8. **7-multi_c.js**
   - Description: Prints "C is fun" x times, where x is the first argument. Prints "Missing number of occurrences" if the argument is not a valid integer.
   - Constraints: Must use `console.log` (max two calls), cannot use `var`, must use a loop.

9. **8-square.js**
   - Description: Prints a square of size x using the character 'X'. Prints "Missing size" if the argument is not a valid integer.
   - Constraints: Must use `console.log`, cannot use `var`, must use a loop.

10. **9-add.js**
    - Description: Prints the addition of two integers passed as arguments using a function `add(a, b)`.
    - Constraints: Must use `console.log`, cannot use `var`.

11. **10-factorial.js**
    - Description: Computes and prints the factorial of the first argument using a recursive function. Returns 1 for NaN or non-positive integers.
    - Constraints: Must use `console.log`, cannot use `var`, must use recursion.

## Setup and Execution

### Prerequisites
- Node.js installed on your system.
- Basic understanding of running JavaScript files via the terminal.

### How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/JS-Fundamentals.git
   ```
2. Navigate to the repository directory:
   ```bash
   cd JS-Fundamentals
   ```
3. Run any script using Node.js. For example:
   ```bash
   node 0-javascript_is_amazing.js
   ```
4. For scripts requiring arguments, provide them after the script name. For example:
   ```bash
   node 9-add.js 13 89
   ```