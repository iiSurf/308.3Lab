// Part 1

// To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
// Remember to commit your solution once it is working.

// TODO: Use only for loops, for of loops, or while loops to implement the solution.

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
// Part 2
// Now we will move onto something slightly more complex.
// Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
// TODO: Write a script that accomplishes the following: 
// TODO: Declare an arbitrary number, n. 
// TODO: Create a loop that searches for the next prime number, starting at n and incrementing from there.
// TODO: As soon as you find the prime number, log that number and exit the loop.
// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
// Be careful! If you set n to a number too large, your loop could take a long time to process.

// find the first prime number all the way to 100;
// process of elimination. divide by itself and one and positive.
let n = 50;
for (let num2 = n; num2 < 100;num2++) {
    let prime = true;
    for (let primeNum = 2; primeNum < num; primeNum++) {

    }
}