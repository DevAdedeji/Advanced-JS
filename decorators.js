// Decorators wraps a function in another function

// These wrappers "decorate" the original function with new capabilites

let sum = (...args) => {
    return [...args].reduce((acc,num) => acc + num)
}

const callCounter = (fn) => {
    let count = 0;
    return (...args) => {
        console.log(`Sum has been called ${count++} times`)
        return fn(...args);
    }
}

sum = callCounter(sum)

console.log(sum(12,3,4,5))