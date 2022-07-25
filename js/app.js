'use strict';

// // Approaching defining the problem domain: Break things down:

// - Array of pics of products
// - variable that tracks the amount of clicks

// DOM References

// -Grab HTML elements that shows the pics of the products - make three different HTML elements  
//   - DOM manipulation to have JS render the products.
//   - DOM manipulation to have JS render the reults of the survey.

// // 1. Global variables

// - Total votes (25)
// - Array to store the goats

// // 2. Executable code

// - Random img generator
//     - selects 3 unique images
//     - event Listener
//       - listens for a click on an image, rerender new images on a click, count the vote, count the view, lower the total number of votes
//     -Event listener that is a click "button" after 25 rounds, show results 

// // B. Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.

// // C. For each of the three images, increment its property of times it has been shown by one.

// // D. Attach an event listener to the section of the HTML page where the images are going to be displayed.

// // E. Once the users ‘clicks’ a product, generate three new products for the user to pick from.

// // F. By default, the user should be presented with 25 rounds of voting before ending the session.

// // G. Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.

// // H. After voting rounds have been completed, remove the event listeners on the product.

// // I. Add a button with the text View Results, which when clicked displays the list of all the products followed by the votes received, and number of times seen for each. Example: banana had 3 votes, and was seen 5 times.

// // 3. Constructor

// - build a Product constuctor that will create Project objects
//   -Properties
//     -votes - variable that tracks the amount of clicks
//     - views - variable that tracks the amount of views
//     - product name
//     - image of the product
//   - array to store the Products

// // A. Create a constructor function that creates an object associated with each product, and has the following properties:
// // Name of the product
// // File path of image
// // Times the image has been shown
// // In the constructor function define a property to hold the number of times a product has been clicked. 
// // After every selection by the viewer, update the newly added property to reflect if it was clicked.
// // Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.

// // 4. DOM References




// // a. can vote for one of three products displayed
// // b. graphs to visualize the results of a week's worth of data
// // c. display three potential products side by side
// // d. use a randomizer to ensure no one product is favored
// // e. manage the size and aspect ratio of the photos
// // f. store each anonymous vote
// // g. calculate the total number of votes
// // h. visually display the totals.
// // i. show results after 25 selections have been made.
// // j. Record the total number of clicks on each possible choice
// // k. calculate the percentage of times an item was clicked when it was shown

// # # #   

// ************* Global Variables **************
let totalVotes = 25;
let allProducts = [];


// ************** DOM References *************
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

let resultsBtn = document.getElementById('show-reults-btn');
let resultsList = document.getElementById('results-list');

// ********** Constructor Function **************



// ************ Object Creation ****************



// *************** Executable Code **********



// *************** Helper Functions **************



// *************** Event Handlers ***************


// ************** Event Listeners *************

