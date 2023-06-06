function sumLoop(num) // 1 + 2 + 3 + 4 + 5 = 15
{
    let result = 0;
    for (Let i = 1; i <= num; i++)
    {
        result += i;
    }
    return result;
}
sumLoop(5); // Loop 5 times
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
substractLoop(5); // Loop 5 times