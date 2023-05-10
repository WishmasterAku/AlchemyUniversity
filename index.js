// const a = 'World';
// const b = 'Hello ${a}';
// console.log(b); // Hello World


// function sumLoops(x) {
//     let sum = 0;

//     for (let i = 1; i <= x; i++) {
//         sum += i;
//     }

//     return sum;
// }

// let x = parseInt(prompt("Enter a number:"));
// let result = sumLoops(x);
// console.log(result);



// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// function scream(n) {
//     let str = "";
//     for (let i = 1; i <= n; i++) {
//         str += "a";
//     }
//     return str;
// }

// Find the Sum is Even or Odd
// const num = 10;
// remainder = num % 2;
// isEven = remainder === 0;
// console.log(isEven);

// Find number of Evens 

// let count = 0;
// for (let i = 1; i<= 50; i++) {
//     const remainder = i % 2;
//     const isEven = remainder === 0;
//     if (isEven){
//         count++;
//     }
// }
// console.log(count);

// let count = 0;
// for (let i = 1; i <= count; i++) {
//     const remainder = i % 2;
//     const isEven = remainder === 0;
// }

// function scream(n) 
// {
//     let str = "";
//     for (let i = 1; i <= n; i++) 
//     {
//       const remainder = i % 2;
//       const isEven = remainder === 0;
//       if(isEven) {
//         str += "a";  
//       }
//       else {
//         str += "A";
//       }
//     }  
//     return str;
// }
// console.log(scream(10));

// Tap Double Console log the last value
function topDouble(value, top) {
    let result = value;
    let lastValue = result;
  
    while (result <= top) {
      lastValue = result;
      result *= 2;
    }
  
    console.log(lastValue);
  }
  topDouble(2, 100);