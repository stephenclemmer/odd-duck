'use strict';

// ************* Global Variables **************
let totalVotes = 25;
let allProducts = [];
let productIndexArr = [];


// ************** DOM References *************
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

let resultsBtn = document.getElementById('show-results-btn');

// **************** Local Storage 2 of 3 ***************
/* This line of code is retrieving data from local storage using the `getItem()` method and storing it
in the `retrievedData` variable. The data being retrieved is associated with the key
`'productData'`, which is a string that was previously stored in local storage using the `setItem()`
method. */
let retrievedData = localStorage.getItem('productData');

/* `let parsedData = JSON.parse(retrievedData);` is parsing the JSON data stored in the `retrievedData`
variable and converting it back into a JavaScript object. This is necessary because data stored in
local storage is always stored as a string, even if it was originally an object. The `JSON.parse()`
method is used to convert the string back into an object so that it can be used in the code as an
object. */
let parsedData = JSON.parse(retrievedData);

console.log(parsedData);

// ********** Constructor Function **************
function Product(name, photoExtension = 'jpg'){
  this.name = name;
  this.photo = `img/${name}.${photoExtension}`;
  this.views = 0;
  this.votes = 0;

  allProducts.push(this);
}


// ************ Object Creation ****************
// ********** Local Storage 3 of 3 ************
if(retrievedData){
  allProducts = parsedData;
} else {

  new Product('bag');
  new Product('banana');
  new Product('bathroom');
  new Product('boots');
  new Product('breakfast');
  new Product('bubblegum');
  new Product('chair');
  new Product('cthulhu');
  new Product('dog-duck');
  new Product('dragon');
  new Product('pen');
  new Product('pet-sweep');
  new Product('scissors');
  new Product('shark');
  new Product('sweep', 'png');
  new Product('tauntaun');
  new Product('unicorn');
  new Product('water-can');
  new Product('wine-glass');
  new Product('wireframe');
}


// *************** Executable Code **********
// *************** Helper Functions **************

function randomIndexGenerator(){
  return Math.floor(Math.random() * allProducts.length);
}


/**
 * The function renders three random images from an array of products and increments their view count.
 */
function renderImgs(){
 /* This code block is generating an array of 6 unique random numbers between 0 and the length of the
 `allProducts` array. It does this by using a `while` loop to repeatedly generate a random number
 using the `randomIndexGenerator()` function until the `productIndexArr` array has a length of 6. If
 the random number generated is not already in the `productIndexArr` array, it is added to the array
 using the `push()` method. This ensures that the same product is not displayed more than once in
 the same set of three images. */
  while (productIndexArr.length < 6){
    let randomNum = randomIndexGenerator();
    if(!productIndexArr.includes(randomNum)){
      productIndexArr.push(randomNum);
    }
  }

 /* These lines of code are removing the first three elements from the `productIndexArr` array and
 assigning them to the variables `imgOneIndex`, `imgTwoIndex`, and `imgThreeIndex`. These variables
 are then used to access the corresponding products in the `allProducts` array and display their
 images on the webpage. This ensures that each set of three images displayed is unique and does not
 contain any duplicates. */
  let imgOneIndex = productIndexArr.shift();
  let imgTwoIndex = productIndexArr.shift();
  let imgThreeIndex = productIndexArr.shift();

 /* These lines of code are setting the `src` attribute of the `imgOne` element to the `photo` property
 of the product object at the index specified by `imgOneIndex` in the `allProducts` array. They are
 also setting the `alt` attribute of the `imgOne` element to the `name` property of the same product
 object. Finally, they are incrementing the `views` property of the same product object by 1. This
 process is repeated for `imgTwo` and `imgThree` as well, with their corresponding indices. This
 code is responsible for displaying the images on the webpage and keeping track of the number of
 times each image has been viewed. */
  imgOne.src = allProducts[imgOneIndex].photo;
  imgOne.alt = allProducts[imgOneIndex].name;
  allProducts[imgOneIndex].views++;

  imgTwo.src = allProducts[imgTwoIndex].photo;
  imgTwo.alt = allProducts[imgTwoIndex].name;
  allProducts[imgTwoIndex].views++;

  imgThree.src = allProducts[imgThreeIndex].photo;
  imgThree.alt = allProducts[imgThreeIndex].name;
  allProducts[imgThreeIndex].views++;
}

renderImgs();

// ************** Event Listeners *************
/* `imgContainer.addEventListener('click', handleClick)` is adding an event listener to the
`imgContainer` element that listens for a click event. When a click event is detected on the
`imgContainer` element, the `handleClick` function is called. */
imgContainer.addEventListener('click', handleClick);

resultsBtn.addEventListener('click', handleShowResults);

// *************** Event Handlers ***************
/**
 * This function handles the click event on an image, updates the vote count for the corresponding
 * product, and stores the product data in local storage when all votes have been cast.
 * @param event - The event parameter represents the event that triggered the function. In this case,
 * it is a click event on an image element.
 */
function handleClick(event){
  event.preventDefault();

  /* `let imgClicked = event.target.alt;` is assigning the value of the `alt` attribute of the image
  element that was clicked to the `imgClicked` variable. This is used in the `handleClick` function
  to determine which product was clicked and update its vote count. */
  let imgClicked = event.target.alt;

  for(let i = 0; i < allProducts.length; i++){
    if (imgClicked === allProducts[i].name){
      allProducts[i].votes++;
    }
  }

  totalVotes--;
  renderImgs();

  if (totalVotes === 0){
    // ******* Local Storage 1 of 3 *********
    let stringifiedData = JSON.stringify(allProducts);
    localStorage.setItem('productData', stringifiedData);
    
    // console.log(storedData);

    imgContainer.removeEventListener('click', handleClick);
  }
}


function handleShowResults(){
  if (totalVotes === 0){

    renderChart();

    resultsBtn.removeEventListener('click', handleShowResults);
  }
}

// ***************** Chart *********************

let canvasElem = document.getElementById('my-chart');


function renderChart(){

  let productLabels = [];
  let productViews = [];
  let productVotes = [];

  for(let i = 0; i < allProducts.length; i++){
    productLabels.push(allProducts[i].name);
    productViews.push(allProducts[i].views);
    productVotes.push(allProducts[i].votes);
  }

  let myObj = {
    type: 'bar',
    data: {
      labels: productLabels,
      datasets: [{
        label: '# of Views',
        data: productViews,
        backgroundColor: [
          'blue'
        ],
        borderColor: [
          'blue'
        ],
        borderWidth: 1
      },
      {
        label: '# of Votes',
        data: productVotes,
        backgroundColor: [
          'red'
        ],
        borderColor: [
          'red'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  new Chart(canvasElem, myObj);

}

