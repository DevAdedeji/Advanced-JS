// Memoization is a programming concept and an optimization techniques that stores the result of function calls in a cache and then returns them when the same input is used

const initApp = async () => {
    // const memoizedMultiplyBy10 = memoize(multiplyBy10)
    // console.log(memoizedMultiplyBy10(10));
    // console.log(memoizedMultiplyBy10(10));
    const memoizedAdd= memoize(addMany)
    console.log(memoizedAdd(1,2,3,4,5))
    console.log(memoizedAdd(1,2,3,4,6))
    console.log(memoizedAdd(1,2,3,4,5))
}

document.addEventListener('DOMContentLoaded', initApp)

const multiplyBy10 = (num) => {
    return num * 10
}

const add3 = (num1, num2, num3) => {
    return num1 + num2 + num3
}

const addMany = (...args) => {
    return args.reduce((acc, num)=> acc + num)
}

const memoize = (fn) => {
    const cache = {};
    return (...args) => {
        if(args.toString() in cache) {
            console.log(cache)
            return cache[args.toString()]
        }
        const result = fn(...args);
        cache[args.toString()] = result;
        return result;
    }
}

const memoizedMultiplyBy10 = () => {
    const cache = {};
    return (num) => {
        if (num in cache) {
            console.log(cache);
            return cache[num];
        }
        const result = num * 10
        cache[num] = result;
        return result
    }
}