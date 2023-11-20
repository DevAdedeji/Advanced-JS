//  A closure is a function having access to the parent scope even after the parent function has closed.

// A closure is created when we define a function, not when a function is executed

// Lexical scopes defines how variable names are resolved in nested functions

// nested functions often have access to the scope of their parent function

// This is often confused with closure, but lexical scope is only an important part of closure


// global scope
let x = 1;

// const parentFunction = () => {
//     // local scope
//     let myValue = 2;
//     console.log(x);
//     console.log(myValue);

//     const childFunction = () => {
//         console.log(x+=5)
//         console.log(myValue +=1);
//     }
//     return childFunction;
// }

// const result = parentFunction();
// result()
// result()

// IIFE (Immediately invoked function expression)
// const privateCounter = (()=>{
//     let count = 0;
//     console.log(`Initial value: ${count}`)
//     return () => { count +=1; console.log(count) }
// })();

// privateCounter();
// privateCounter();
// privateCounter();

const credits = ((num) => {
    let credits = num;
    console.log(`initial credit value: ${credits}`)
    return () => {
        credits -= 1;
        if(credits > 0) console.log(`playing game, ${credits} credit(s) remaining`);
        if (credits <= 0) console.log('Not enough credits');
    }
})(3);

credits();
credits();
credits();