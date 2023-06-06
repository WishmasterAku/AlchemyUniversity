// Calculations using loops 
function sumLoop(num) // 1 + 2 + 3 + 4 + 5 = 15
{
    let result = 0;
    for (Let i = 1; i <= num; i++)
    {
        result += i;
    }
    return result;
}
sumLoop(5); // Equals 15

let num = parseInt(prompt("Enter a number: ")); // Ask user to enter a number
let result = sumLoop(num); // Call the function
console.log(result); // 15 | Print the result

function substractLoop(num) // 1 - 2 - 3 - 4 - 5 = -15
{
    let result = 0;
    for (let i = 1; i <= num; i++)
    {
        result -= i; 
    }
    return result; 
}
substractLoop(5); // Equals -15

function multiplyLoop(num) // 1 * 2 * 3 * 4 * 5 = 120
{
    let result = 1;
    for (let i = 1; i <= num; i++)
    {
        result *= i;
    }
    return result;
}
multiplyLoop(5); // Equals 120

function divideLoop(num) // 1 / 2 / 3 / 4 / 5 = 0.008333333333333333
{
    let result = 1;
    for (let i = 1; i <= num; i++)
    {
        result /= i;
    }
    return result;
}
divideLoop(5); // Equals 0.008333333333333333

function moduloLoop(num) // 1 % 2 % 3 % 4 % 5 = 1
{
    let result = 1;
    for (let i = 1; i <= num; i++)
    {
        result %= i;
    }
    return result;
}
moduloLoop(5); // Equals 1

function powerLoop(num) // 1 ^ 2 ^ 3 ^ 4 ^ 5 = 1
{
    let result = 1;
    for (let i = 1; i <= num; i++)
    {
        result ^= i;
    }
    return result;
}
powerLoop(5); // Equals 1

function numberOfScreams(a)
{
    let scream = "";
    for (Let i = 1; i <= a; i++)
    {
        scream += "A";
    }
    return scream;
}
numberOfScreams(10); // AAAAAAAAAA