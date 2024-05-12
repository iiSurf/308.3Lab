// TODO: Part 1 ----------------------------------------------------------------

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
// TODO: Part 2 ---------------------------------------------------------------
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
// let n = 2; // n is an arbitrary number
// let counterPart2 = 0;
// We start with the given arbitrary number n.
// The outer for loop iterates from n + 1 onwards until we find a prime number.
// The inner for loop checks if the current number is divisible by any number from 2 up to its square root. If it is, we set isDivisible to true.
// If the inner loop completes without finding any divisors, we log the current number as the next prime number and exit the outer loop.

let n = 11;

let isPrime = false;
for (let i = n + 1; !isPrime; i++) {
  let isDivisible = false;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isDivisible = true;
      break;
    }
  }
  if (!isDivisible) {
    console.log(`The next prime number after ${n} is going to be ${i}`);
    isPrime = true;
  }
}

// TODO: Part 3 -----------------------------------------------------

// Assumptions
// 4 cells per row and no escape characters other than \n

// What variables do I need to create to be able to make logical code

// if (char === "\n") console.log(`We found a new line`);

// My attempt to follow along wth Dylan

// const str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// My attempt at following Dylans code in class and was unsuccessful. His code is down below.
// let cell1 = ``;
// let cell2 = ``;
// let cell3 = ``;
// let cell4 = ``;
// let placeholder = ``;
// let counter = 0;

// for (let char of str) {
//     switch (char) {
//     // If comma do this
//         case ",":
//             counter++;
//             if (!cell1) {
//                 cell1 = placeholder;
//                 placeholder = ``;
//             } else if (!cell2) {
//                 cell2 = placeholder;
//                 placeholder = ``;
//                }
//                else if (!cell3) {
//                 cell3 = placeholder;
//                 placeholder = ``;
//                }
//                else if (!cell4) {
//                 cell4 = placeholder;
//                 placeholder = ``;
//                }
//                 let cell1 = ``;
//                 let cell2 = ``;
//                  let cell4 = ``;
//                 let cell3 = ``;
//             }
//             // console.log(`Found comma`);
//                 break;
//         // If new line do this
//                 case "\n":
//                    counter++;
//                   cell4 = placeholder;
//                   console.log(cell1, cell2, cell3, cell4);
//             // console.log(`Found New LIne`);
//                 break;
//         // If char do this
//                 default:
//                 counter++;
//                 placeholder += char;
//             // console.log(`Found char`);
//                 // console.log(`Found placeholder`);
//                 if(counter === str.length) {
//                     cell4 = placeholder;
//                     placeholder = ``;
//                     console.log(cell1, cell2, cell3, cell4);
//                     cell1 = ``;
//                     cell2 = ``;
//                     cell3 = ``;
//                     cell4 = ``;
//                 } else {
//                     counter++;
//                     placeholder
//                 }
//                 break;
//     }
// }


// DYLANS CODE:

// What are we accomplishing:
//Loop through the characters of a given CSV string.
// Store each "cell" of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the "\r\n" sequence, move to the next "row."
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);

//Assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than "\n".

// Variables to hold string and cell data
// const str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// for (let char of str) {
//   switch (char) {
//     // If comma do this
//     case ',':
//       counter++;
//       if (!cell1) {
//         cell1 = placeholder;
//         placeholder = ``;
//       } else if (!cell2) {
//         cell2 = placeholder;
//         placeholder = ``;
//       } else {
//         cell3 = placeholder;
//         placeholder = ``;
//       }
//       break;
//     //If new line do this
//     case '\n':
//       counter++;
//       cell4 = placeholder;
//       placeholder = ``;
//       console.log(cell1, cell2, cell3, cell4);
//       cell1 = ``;
//       cell2 = ``;
//       cell3 = ``;
//       cell4 = ``;
//       break;
//     //If char do this
//     default:
//       counter++;
//       placeholder += char;

//       if (counter === str.length) { //If it's our last character we populate cell4 and print
//         cell4 = placeholder;
//         placeholder = ``;
//         console.log(cell1, cell2, cell3, cell4);
//         cell1 = ``;
//         cell2 = ``;
//         cell3 = ``;
//         cell4 = ``;
//         counter = 0;
//       }
//       break;
//   }
// }
const str = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

let cell1 = ``;
let cell2 = ``;
let cell3 = ``;
let cell4 = ``;
let placeholder = ``;
let counter = 0;

for (let char of str) {
  // If comma do this
  if (char === ' ,') {
    counter++;
    if (!cell1) {
      cell1 = placeholder;
      placeholder = ``;
    } else if (!cell2) {
      cell2 = placeholder;
      placeholder = ``;
    } else {
      cell3 = placeholder;
      placeholder = ``;
    }
  } else if (char === ' \n') {
    //If new line do this
    counter++;
    cell4 = placeholder;
    placeholder = ``;
    console.log(cell1, cell2, cell3, cell4);
    cell1 = ``;
    cell2 = ``;
    cell3 = ``;
    cell4 = ``;
  } else {
    counter++;
    placeholder += char;

    if (counter === str.length) {
      //If it's our last character we populate cell4 and print
      cell4 = placeholder;
      placeholder = ``;
      console.log(cell1, cell2, cell3, cell4);
      cell1 = ``;
      cell2 = ``;
      cell3 = ``;
      cell4 = ``;
      counter = 0;
    }
  }
}