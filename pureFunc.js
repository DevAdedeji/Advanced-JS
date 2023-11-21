// Pure function

// A part of the functional programming paradigm

// Why pure functions
// 1) Clean code
// 2) Easy to test
// 3) Easy to debug
// 4) Decoupled and independent
// 5) Could be added to your utility function

// Rules for Pure functions:
// 1) The same input ALWAYS gives the same output
// A pure function should have at least one parameter
// 2) No side effects
// This also means accessing the scope outside the function makes the function impure

const add = (x,y) => x + y;
// console.log(add(2,3))
const fullName = (first, last) => `${first} ${last}`
// console.log(fullName('Adedeji', 'Tewogbade'))

// Pure functions cannot:
// Access a database, API, file system, storage, etc.
// Modify the DOM
// Or even log to the console

// That said, clearly 'impure' functions are necessary but they are harder to test and debug

// Further, no input state can be modified, that is, no data shuld be mutated, consider all input data to be immutable