/*
File Name: SophisticatedCode.js
Content: Complex and Elaborate JavaScript Code Example
*/

// Class to represent a person
class Person {
   constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
   }

   getFullName() {
      return this.firstName + ' ' + this.lastName;
   }
}

// Function to calculate factorial of a number
function factorial(num) {
   if (num === 0 || num === 1) {
      return 1;
   } else {
      return num * factorial(num - 1);
   }
}

// Object representing a shopping cart
let shoppingCart = {
   customerName: 'John Doe',
   items: [
      { 
         name: 'Shirt',
         quantity: 2,
         price: 20
      },
      {
         name: 'Pants',
         quantity: 1,
         price: 30
      },
      {
         name: 'Socks',
         quantity: 3,
         price: 5
      }
   ],
   calculateTotal: function() {
      let total = 0;
      this.items.forEach(item => {
         total += (item.quantity * item.price);
      });
      return total;
   }
};

// Function to validate an email address
function validateEmail(email) {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email);
}

// Custom error class
class CustomError extends Error {
   constructor(message, errorCode) {
      super(message);
      this.errorCode = errorCode;
   }
}

// Function to perform division
function divide(num1, num2) {
   if (num2 === 0) {
      throw new CustomError('Division by zero', 1001);
   }
   return num1 / num2;
}

// Example usage of the custom classes and functions
const person = new Person('John', 'Doe');
console.log(person.getFullName());

console.log(factorial(5));

console.log(shoppingCart.calculateTotal());

console.log(validateEmail('example@email.com'));

try {
   console.log(divide(10, 2));
   console.log(divide(10, 0)); // throws an error
} catch (e) {
   console.error(e.message);
   console.error('Error Code:', e.errorCode);
}

// ... continue with more complex code as needed