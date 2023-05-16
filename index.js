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
// function topDouble(value, top) {
//     let lastValue;
//     while (value <= top) {
//       lastValue = value;
//       value *= 2;
//     }
//     console.log(lastValue);
//   }
//   topDouble(2, 100);

// function isEven(num){
//     const remainder = num % 2;
//     const isEven = remainder === 0;
//     if (isEven){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function maxSum(num) 
// {
//   let result = 0;
//   for (let i = 1; i <= num; i++) {
//     result += i;
//     }
//   return result;
// }
// console.log(maxSum(10));

function startsWithX(string) {
    str = string
    if (str[0] === "x") {
        return true;
    }
    else {
        return false;
    }
}
console.log(startsWithX("x-ray"));

function endsWithX(string) 
{
    str = string;
    if (str[str.length -1 ] === "x" )
    {
      return true;
    }
      
    else if (str[str.length -1 ] === "X") 
    {
        return true;
    }
    else
    {
        return false;
    }
}



console.log(endsWithX("FactorX"));


const string = "Hello";
for(let i = 0; i < string.length; i++) {
    console.log(string[i]);
}
if (string[i].length === "x" || string[i] === "X") {
    return true;
}   
else {
    return false;
}


function isAllX(string) 
{
    for(let i = 0; i < string.length; i++)
    {
        if(string[i] !== "x" && string[i] !== "X")
        {
            return false;
        }
        
    }
    return true;
}

function findFirstX(string) {

    return string.indexOf('x');
        
}

// function splitAtX(string) {
//     let firstHalf = string.slice(0, string.indexOf('x'));
//     let secondHalf = string.slice(string.indexOf('x') + 1);  
//     firstCount = firstHalf.length;
//     secondCount = secondHalf.length;
//     if (firstCount === secondCount) {
//         console.log("Equal");
//     }
//     else if (firstCount > secondCount) {
//         console.log("First Half is Greater");
//     }
//     else {
//         console.log("Second Half is Greater");
//     }
//     }
// splitAtX("HelloxWorld");
// console.log(firstHalf + secondHalf);

function splitAtX(string) {
    let firstHalf = string.slice(0, string.indexOf('x'));
    let secondHalf = string.slice(string.indexOf('x') + 1);
    if (firstHalf.length > secondHalf.length)
    {
        return firstHalf;
    }
    else{
        return secondHalf;
    }
}


