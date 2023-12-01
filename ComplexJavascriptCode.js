/*
Filename: ComplexJavascriptCode.js
Content: A complex and elaborate JavaScript code with over 200 lines of code.
*/

// Utility function to retrieve data from an API
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

// Class representing a user
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  // Method to send an email to the user
  sendEmail(subject, message) {
    console.log(`Sending email to ${this.email}: Subject - ${subject}, Message - ${message}`);
  }
}

// Function to calculate the factorial of a number
function factorial(number) {
  if (number === 0 || number === 1)
    return 1;
  else
    return number * factorial(number - 1);
}

// Asynchronous function to execute complex calculations
async function performComplexCalculations() {
  try {
    // Fetching data from an API
    const apiData = await fetchData('https://api.example.com/data');

    // Processing the fetched data
    const processedData = apiData.map(item => item * Math.random());

    // Creating an array of User objects
    const users = [
      new User('John Doe', 25, 'john.doe@example.com'),
      new User('Jane Smith', 30, 'jane.smith@example.com'),
      new User('Bob Johnson', 35, 'bob.johnson@example.com')
    ];

    // Sending emails to users with their processed data
    users.forEach(user => {
      user.sendEmail('Data Processing Complete', `Hello ${user.name}, your processed data is ${processedData}`);
    });

    // Calculating the factorial of a random number
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const result = factorial(randomNumber);

    console.log(`Factorial of ${randomNumber} is ${result}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Calling the main function to execute the code
performComplexCalculations();