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
// let resultsList = document.getElementById('results-list');

// ********** Constructor Function **************
function Product(name, photoExtension = 'jpg'){
  this.name = name;
  this.photo = `img/${name}.${photoExtension}`;
  this.views = 0;
  this.votes = 0;

  allProducts.push(this);
}


// ************ Object Creation ****************
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



// *************** Executable Code **********
// *************** Helper Functions **************

function randomIndexGenerator(){
  return Math.floor(Math.random() * allProducts.length);
}


function renderImgs(){
  while (productIndexArr.length < 6){
    let randomNum = randomIndexGenerator();
    if(!productIndexArr.includes(randomNum)){
      productIndexArr.push(randomNum);
    }
  }

  // console.log(productIndexArr);

  let imgOneIndex = productIndexArr.shift();
  let imgTwoIndex = productIndexArr.shift();
  let imgThreeIndex = productIndexArr.shift();
  
  // console.log(productIndexArr);
  
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
imgContainer.addEventListener('click', handleClick);

resultsBtn.addEventListener('click', handleShowResults);

// *************** Event Handlers ***************
function handleClick(event){
  event.preventDefault();
  
  let imgClicked = event.target.alt;
  
  // console.dir(event.target);

  for(let i = 0; i < allProducts.length; i++){
    if (imgClicked === allProducts[i].name){
      allProducts[i].votes++;
    }

    // console.log(allProducts);

  }
  totalVotes--;
  renderImgs();
  
  if (totalVotes === 0){
    imgContainer.removeEventListener('click', handleClick);
  }
  // console.log(imgClicked);
}


function handleShowResults(){
  if (totalVotes === 0){
    renderChart();
    // for(let i = 0; i < allProducts.length; i++){
    //   let liElem = document.createElement('li');
    //   liElem.textContent = `${allProducts[i].name} had ${allProducts[i].votes} votes, and was seen ${allProducts[i].views} times.`;
    //   resultsList.appendChild(liElem);
    // }
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

