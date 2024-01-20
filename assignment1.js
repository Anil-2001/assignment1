/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Anil Pokhrel Student ID: 118889237 Date: 2024-01-20
*
********************************************************************************/ 


// defining the constant variable for Student Name / Email
const studentName = "Anil Pokhrel";
const studentEmail = "apokhrel8";

// Define arrays for server verbs, paths, and responses
const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
  "Welcome to WEB700 Assignment 1",
  "This assignment was prepared by " + studentName,
  studentName + ": " + studentEmail,
  "User Logged In",
  "Main Panel",
  "Logout Complete"
];

// Utility function to get a random integer between 0 and max (inclusive)
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Function to simulate a simple web server
function httpRequest(httpVerb, path) {
  // Loop through all server paths
  for (let i = 0; i < serverPaths.length; i++) {
    // Check if the current index matches the requested httpVerb and path
    if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
      // If matched, return the response with status code 200
      return "200: " + serverResponses[i];
    }
  }

  // If no match is found, return a 404 error message
  return "404: Unable to process " + httpVerb + " request for " + path;
}

// Define arrays for test verbs and paths
const testVerbs = ["GET", "POST"];
const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

// Function to automate tests with random requests
function automateTests() {
  // Function to generate a random request and invoke httpRequest
  function randomRequest() {
    const randVerb = testVerbs[getRandomInt(testVerbs.length - 1)];
    const randPath = testPaths[getRandomInt(testPaths.length - 1)];

    // Invoke the httpRequest function with random values and log the result
    console.log(httpRequest(randVerb, randPath));
  }

  // Use setInterval to execute randomRequest every 1 second (1000 milliseconds)
  setInterval(randomRequest, 1000);
}

// Invoke the automateTests function to start automated tests
automateTests();
