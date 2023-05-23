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


// Arrays

const averageTestScores = [76, 89, 95, 74, 59];
let total = 0;
for (let i = 0; i < averageTestScores.length; i++)
  {
  total += averageTestScores[i];
  }

  const avg = total / averageTestScores.length;
console.log("The Average Score is " + avg);

function stringWord(string){
    for(let i = 0; i < string.length; i++)
      console.log(string[i]);
  }
  
  stringWord("Hello World");

  function hasOne(array) {
    for(let i = 0; i < array.length; i++)
    {
        
        if(array[i] === 1)
        {
            return true;
        }        
    }
    return false;
}


function sumEven(array) {
    let total = 0;
    for(let i = 0; i < array.length; i++)
    {   
        let even = array[i] % 2;
        let isEven = even === 0;
        if(array[i] === isEven)
        {
            total += array[i];
        }
        return total;
    }    
}

function sumEven(array) 
{
    let total = 0;   
    for(let i = 0; i < array.length; i++)
    {        
        let even = array[i] % 2;
        let isEven = even === 0;
        if(isEven)
        {
            total += array[i];            
        }        
    }   return total;   
}

function unique(array) {
    const newArray = [];
    for(let i = 0; i < array.length; i++)
    {
        const element = array[i];
        if(!newArray.includes(element)) {
            newArray.push(element);
        }
    }
    return newArray;
}

function uniqueTwo(array) 
{   
    const newArray = [];
    for(let i = 0; i < array.length; i++)
    {
        const element = array[i];
        const isUnique = array.indexOf(element) >= 0;
        if(isUnique)
        {
            newArray.push(element);
        }
    }
    return newArray;   
}

function uniqueTwo(array) {   
    const newArray = [];
    
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      const isUnique = newArray.indexOf(element) === -1;
      
      if (isUnique) {
        newArray.push(element);
      }
    }
    
    return newArray;   
  }
  
  const originalArray = [2, 4, 5, 2, 5, 6, 7];
  const uniqueArray = uniqueTwo(originalArray);
  
  console.log(uniqueArray);


  function addOne(array) {
    for (let i = 0; i < array.length; i++)
    {
        array[i] += 1;
    }
}

function removeOccurrences(array, num) {
    for(let i = array.length - 1; i >= 0; i--)
    {
        if(array[i] === num) {
            array.splice(i, 1);
        }
    }
}


// Objects

const order = {
    pizzas: 1,
    extraCheese: true,
    deliveryInstructions: "Front Door",
};

// Number of Pizzas
function numberOfPizzas(orders) {
    pizzaOrders = 0;
    for(let i = 0; i < orders.length; i++)
    {
        pizzaOrders += orders[i].pizzas;
    }
    return pizzaOrders;
}

const orders = [
    { pizzas: 3 },
    { pizzas: 5 },
    { pizzas: 10 }
];

const totalPizzas = numberOfPizzas(orders);
console.log( totalPizzas ); // 18


// Order by type
const ORDER_TYPES = require('./orderTypes');

function numberOfPizzas(orders) {
    let pizzaOrders = 0;
    for(let i = 0; i < orders.length; i++)
    {
        if(orders[i].type === ORDER_TYPES.PIZZA)
        {
            pizzaOrders += orders[i].pizzas;        
        }
        
    }
    return pizzaOrders;
}

const ORDER_TYPES = {
    PIZZA: 0,
    WING: 1,
    PASTA: 2,
 }

// function splitAtY(string)
// {
//     let firstHalf = string.slice(0, string.indexOf('y'));
//     let secondHalf = string.slice(string.indexOf('y') +1);
//     console.log(firstHalf + " " + secondHalf);
// }

// console.log(splitAtY("HelloyWorld"));

// const groceryList = {
//     apples: 5,
//     bananas: 3,
//     milk: 7,
//     avocados: 4,
// }

function addToShoppingCart(groceryList, item, quantity) {
    groceryList[item] = quantity;//adds item to groceryList
}

function removeFromShoppingCart(groceryList, item) {
    if (groceryList.hasOwnProperty(item)) {
        delete groceryList[item]; // removes item from groceryList
    }   
}

const groceryList = {};//creates groceryList
groceryList.apples = 5; //adds apples to groceryList
groceryList.cookies = 10; //adds cookies to groceryList
console.log(groceryList); // displays groceryList
removeFromShoppingCart(groceryList, "cookies"); //removes cookies from groceryList
console.log(groceryList); 

const cars = { a: "Honda", b: "Toyota", c: "Acura", d: "Nissan" }
for (let key in cars) 
  {
    console.log(key);
  }
console.log(Object.keys(cars)); // [ 'a', 'b', 'c', 'd' ]
console.log(Object.values(cars)); // [ 'Honda', 'Toyota', 'Acura', 'Nissan' ]
console.log(Object.keys(cars).length); // 4


objectSecret = {secret: "Pass123"} // creates objectSecret
function removeSecret(objectSecret) {
    delete objectSecret.secret; // removes secret from objectSecret
}