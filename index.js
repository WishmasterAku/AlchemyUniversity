const a = 'World';
const b = 'Hello ${a}';
console.log(b); // Hello World


function sumLoops(x) {
    let sum = 0;

    for (let i = 1; i <= x; i++) {
        sum += i;
    }

    return sum;
}

let x = parseInt(prompt("Enter a number:"));
let result = sumLoops(x);
console.log(result);



function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function scream(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        str += "a";
    }
    return str;
}
