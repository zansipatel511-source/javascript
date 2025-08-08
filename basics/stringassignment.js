// Write a JavaScript  code to reverse a given string and print the reversed string.//
/*let originalString = "hello world";
let reversedString = originalString.split("").reverse().join("");
console.log("Reversed String:", reversedString);*/




// Write a JavaScript code to check if a given string is a palindrome or not. //
/*let str = "madam";
let reversed = str.split("").reverse().join("");
if (str === reversed) {
    console.log("It is a palindrome");
} else {
    console.log("It is not a palindrome");
}*/



// Write a JavaScript  code to find the sum of digits of a positive integer. //
/*let number = 1234; 
let sum = 0;
while (number > 0) 
    {
    sum += number % 10;        
    number = Math.floor(number / 10);
}

console.log("Sum of digits:", sum);*/




// Given an array of numbers, write JavaScript code to find the maximum, minimum, and average values. //
/*let numbers = [4, 8, 1, 10, 6];
let max = numbers[0];
let min = numbers[0];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
    sum += numbers[i];
}
let avg = sum / numbers.length;

console.log("Maximum is:", max);
console.log("Minimum is:", min);
console.log("Average is:", avg);*/




// Write a JavaScript function to check whether a given number is prime or not. //
/*let num = 7; 
let isPrime = true;

if (num <= 1) 
    {
    isPrime = false;
}
for (let i = 2; i < num; i++) 
    {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) 
    {
    console.log(num + " is a prime number");
} else 
    {
    console.log(num + " is not a prime number");
}*/