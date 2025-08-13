// Functions

// JavaScript functions are blocks of code designed to perform specific tasks.
// Executed when invoked (called).
// Allow code organization and control.



// Code 1: Controlling Code with Functions
// 1. Print length of the name.
/*var name = "Shubham";
console.log(name, name.length);*/

// 2. Sum of two numbers.
/*var a = 3;
var b = 15;
var c = a + b;
console.log("Sum is: ",c);*/

// 3. Multiplication of two numbers.
/*var x = 2;
var y = 4;
var c = x * y;
console.log(x * y);*/


// Code 2: Using Functions
// solution
/*var name = "Zansi";

function sheru() {
  var name = "Shiro";
  return "length ", name.length;
}
console.log(name);
console.log(sheru());*/

// Sum of two numbers
/*function sum_of_two_numbers() 
{
    var a = 2;
    var b = 3;
    return "Sum " + (a + b);
}
console.log(sum_of_two_numbers());*/


// printing from 1 to 10
/*function print_numbers() 
{
  for (var i = 1; i <= 10; i++) 
    {
    console.log(i);
  }
}
print_numbers(); */





// Code 3: Functions using Return Values
/*function add(a, b) {
  var sum = a + b;
  return sum;
}

function square(x) {
  var y = x * x;
  return y;
}

function cube(x) {
  var z = x * x * x;
  return z;
}

var output1 = add(2, 3);
console.log("output1 is ", output1);

var output2 = cube(output1);
console.log("output2 is ", output2);

var answer = square(output2);
console.log("answer is ", answer);*/




// Code 4: Local Scope vs Global Scope
/*var child1 = "Zansi";

function g1()
{
    var child2 = "Kavya";
    console.log("My child's name is ", child2);
}

function g2()
{
    var child3 = "Dharm";
    console.log("My child's name is ", child3);
}

function g3()
{
    var child4 = "Parv";
    console.log("My chils's name is ", child4);
}

g1()
console.log(child1);*/




// Introduction to Inbuilt Functions
//### **Inbuilt Functions**

// JavaScript provides a set of built-in functions for various operations.
// Enhance code readability and efficiency.

// Code 1: Using toString vs Number()
/*var num1 = 15;
var num2 = 10;
num1 = num1.toString();
num2 = num2.toString();
console.log(num1 , num2);

var x = "20";
x = Number(x);
console.log(typeof(x));*/


// Code 2: lastIndexOf
/*var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf("Dodo"));

var people = ["jamna das", "pandu", "kalicharan", "elaichi", "oggy", "pandu"];
console.log(people.lastIndexOf("jerry"));*/


// ## **Inbuilt Function 3: `indexOf`**
//### **Code 3:**
/*var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.indexOf("Dodo"));

var people = ["jamna das", "pandu", "kalicharan", "elaichi", "oggy", "pandu"];
console.log(people.indexOf("jerry"));*/


// Code 4: shift
/*var people = [1, 2, 3];
var x = people.shift();
console.log(people);
console.log("removed", x);*/


// Code 5: unshift
/*var arr = [1, 2, 3];
arr.unshift(4, 5, 6, 7);
console.log(arr);*/


// Code 6: join
/*var arr = ["M", "A", "N"];
var bag = "";
for (var i = 0; i < arr.length; i++)
{
    bag = bag + arr[i];
}
console.log(bag);*/


// Inbuilt Function 4:
/*var bag = arr.join();
console.log(bag);*/


// Inbuilt Function 5: toLowerCase() vs toUpperCase()
// Code 9:
/*var s1 = 'The quick brown fox jumps over the lazy dog.'
console.log(s1.toLowerCase());

var s2 = 'The quick brown fox jumps over the lazy dog.'
console.log(s1.toUpperCase());*/


// Code 10: indexOf
/*var p1 = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
var search = 'dog';
var indexOf = p1.indexOf(search);
console.log(indexOf);*/


// Code 11: split()
/*var str = "Hello! Good Morning";
var x = str.split(" ");
console.log(x);*/




// Three types of function in JavaScript 
// Named Function:
// Syntax:
/*    function functionName(parameters) 
    {
    // function body
    } */


// Example:
/*function greet(name)
{
    return "Hello, " + name + " !";
}
console.log(greet("Zansi"));*/


// Anonymous Function:
//Syntax:
/*    var functionName = function(parameters) 
    {
    // function body
    };*/


// Example:
/*var greet = function(name)
{
    return "Hello, " + name + " !";
}
console.log(greet("Zansi"));*/


// Arrow Function (ES6):
// Syntax:
/*    var functionName = (parameters) => {
    // function body
    };*/

// Example:
/*var greet = (name) => {
   return "Hello, " + name + " !";
}
console.log(greet("Zansi"));*/





// Higher-Order Functions (HOF) in JavaScript
// ## **Higher-Order Functions (HOF): Introduction**

//### **Definition:**
// A Higher-Order Function (HOF) is a function that operates on other functions.
// It takes one or more functions as arguments or returns a function.