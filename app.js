// console.log('hello')
// var a=10
// var b=12
// console.log(a+b)

// if(a>b){
//     console.log('a is greater than b')
// }else{
//     console.log('b is less than a')
// }

// function showData(){
//     console.log('show data')
// }

// showData()

// let obj={
//     name:'ahmed',
//     age:20,
//     city:'Hyderabad',
//     }
// //destructuring
//     let {name,city,age}=obj

//     console.log('My name is ',name)
//     console.log('My age is ',age)
//     console.log("I am from", city)


//         a=20;
//         b=10;
//         if(a>b){
//             console.log('A is greater then b')
//         }else{
//             console.log('B is greater than A')
//         }
    //Declaring variables
let name = "Ahmed";
console.log("Name:", name);

//const
const pi = 3.14;
console.log("Value of pi:", pi);

//variables
let age1 = 25;
age1 = 26;
console.log("Updated age:", age1);

let firstName = "Ahmed";
let lastName = "Ali";
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

//var
var city = "Karachi";
console.log("City:", city);

//AO
let sum = 10 + 5;
console.log("Sum:", sum);

//Sub
let difference = 20 - 5;
console.log("Difference:", difference);

//Multiplication
let product = 4 * 3;
console.log("Product:", product);

//Division
let quotient = 15 / 3;
console.log("Quotient:", quotient);

//Modulus
let remainder = 10 % 3;
console.log("Remainder:", remainder);

//if
let num = 5;
if (num > 0) {
  console.log("Number is positive");
}

//if-else
let age = 18;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a not an adult");
}

//if-else with multiple conditions
let grade = 75;
if (grade >= 90) {
  console.log("Grade: A");
} else if (grade >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

//Checking even or odd
let number = 10;
if (number % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

//Nested if
let user = "admin";
let password = "12345";
if (user === "admin") {
  if (password === "12345") {
    console.log("Login successful");
  } else {
    console.log("Incorrect password");
  }
} else {
  console.log("User not found");
}

//Basic switch case
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

//Fruit selection
let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("Banana is yellow");
    break;
  case "apple":
    console.log("Apple is red");
    break;
  default:
    console.log("Unknown fruit");
}

//Grading system
let marks = 85;
switch (true) {
  case marks >= 90:
    console.log("Grade: A");
    break;
  case marks >= 75:
    console.log("Grade: B");
    break;
  default:
    console.log("Grade: C");
}

//for loop
for (let i = 1; i <= 5; i++) {
    console.log("For loop iteration:", i);
  }
  
  //while loop
  let j = 1;
  while (j <= 5) {
    console.log("While loop iteration:", j);
    j++;
  }
  
  // do-while loop
  let k = 1;
  do {
    console.log("Do-while loop iteration:", k);
    k++;
  } while (k <= 5);
  
  //Looping through an array
  let fruits = ["apple", "banana", "cherry"];
  for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
  }
  
  // Nested loops
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      console.log(`i=${i}, j=${j}`);
    }
  }

  
  //function
function greet(name) {
    console.log("Hello, " + name + "!");
  }
  greet("Ahmed");
  
  // Example 2: Function with return value
  function add(a, b) {
    return a + b;
  }
  console.log("Sum:", add(5, 3));
  
  // Example 3: Function with default parameters
  function multiply(a, b = 1) {
    return a * b;
  }
  console.log("Product:", multiply(4));
  
  // Example 4: Function expression
  const divide = function (a, b) {
    return b !== 0 ? a / b : "Error";
  };
  console.log("Division:", divide(10, 2));
  
  // Example 5: Arrow function
  const square = (x) => x * x;
  console.log("Square:", square(4));
  
