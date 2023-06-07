const num = 10; 
remainder = num % 2; // Calculates the remainder of dividing by 2
isEven = remainder === 0; // Checks if the remainder is 0
if (isEven) {
    console.log("The number is even");
}
else {
    console.log("The number is odd");
}


// Find number of Evens 

let count = 50;
for (let i = 1; i<= count; i++) { 
    const remainder = i % 2;
    const isEven = remainder === 0; 
    if (isEven){
        count++; 
    }
}
console.log(count); // 25 Total number of even numbers between 1 and 50


function scream(n) 
{
    let str = "";
    for (let i = 1; i <= n; i++) 
    {
      const remainder = i % 2;
      const isEven = remainder === 0;
      if(isEven) {
        str += "a";  
      }
      else {
        str += "A";
      }
    }  
    return str;
}
console.log(scream(20)); // AaAaAaAaAaAaAaAaAaAaAaAa