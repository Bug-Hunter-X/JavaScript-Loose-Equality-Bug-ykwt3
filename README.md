# JavaScript Loose Equality Bug

This repository demonstrates a common error in JavaScript related to the misuse of strict equality (===) versus loose equality (==).

The `bug.js` file contains a function that uses strict equality to compare two values. This will not correctly handle type coercion, leading to unexpected results in certain cases.

The `bugSolution.js` file provides a corrected version that uses loose equality (==) to handle these cases correctly.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run it in a JavaScript environment (e.g., a browser's console or Node.js).
3. Observe the unexpected results.
4. Open `bugSolution.js` to see the corrected version using loose equality.

## Lesson Learned

Always consider the implications of using strict equality (===) versus loose equality (==) in JavaScript. Choose the operator that best suits your needs based on whether type coercion is desired.