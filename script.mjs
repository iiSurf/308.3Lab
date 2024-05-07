// Use only for loops, for of loops, or while loops to implement the solution.
for (let num = 1; num < 101; num++) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log(`Fizz Buzz`);
    } else if (num % 3 == 0) {
        console.log(`Fizz`);
    } else if (num % 5 == 0) {
        console.log(`Buzz`);
    } else if (!(num % 3 == 0 && num % 5 == 0)) {
        console.log(num);
    }
}