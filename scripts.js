"use strict";

let hello = alert("Hello, please click on the products you like!");
let warning = alert("Don't touch the duck.");

function helloQuack() {
  alert("Quack!");
}

let productContainer = document.querySelector("section");
let resultButton = document.querySelector("section + div");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");

let clicks = 0;
let maxClicksAllowed = 25;

const state = {
  allProductsArray: [],
};

function Products(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

function getRandomNumber() {
  return Math.floor(Math.random() * state.allProductsArray.length);
}

function renderProduct() {
  let prod1 = getRandomNumber();
  let prod2 = getRandomNumber();
  let prod3 = getRandomNumber();
  if (prod1 === prod2) {
    prod2 = getRandomNumber();
  }
  if (prod1 === prod3) {
    prod3 = getRandomNumber();
  } else if (prod2 === prod3) {
    prod3 = getRandomNumber();
  }

  image1.src = state.allProductsArray[prod1].src;
  image2.src = state.allProductsArray[prod2].src;
  image3.src = state.allProductsArray[prod3].src;
  image1.alt = state.allProductsArray[prod1].name;
  image2.atl = state.allProductsArray[prod2].name;
  image3.alt = state.allProductsArray[prod3].name;
  state.allProductsArray[prod1].views++;
  state.allProductsArray[prod2].views++;
  state.allProductsArray[prod3].views++;
  console.log(state.allProductsArray[prod1]);
  console.log(state.allProductsArray[prod2]);
  console.log(state.allProductsArray[prod3]);
}

function handleProdClick(event) {
  if (event.target === productContainer) {
    alert("Please click on an image");
  }
  clicks++;
  let clickProd = event.target.alt;
  for (let i = 0; i < state.allProductsArray.length; i++) {
    if (clickProd === state.allProductsArray[i].name) {
      state.allProductsArray[i].clicks++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    productContainer.removeEventListener("click", handleProdClick);
    resultButton.addEventListener("click", renderResults);
    resultButton.className = `clicks-allowed`;
    productContainer.className = `no-voting`;
    alert("Please Click View Results Below");
  } else {
    renderProduct();
  }
}

function renderResults() {
  let ul = document.querySelector("ul");
  for (let i = 0; i < state.allProductsArray.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${state.allProductsArray[i].name} had ${state.allProductsArray[i].clicks} votes, and was seen ${state.allProductsArray[i].views} times.`;
    ul.appendChild(li);
  }
}

let bag = new Products("bag", "./images/bag.jpg");
let banana = new Products("banana", "./images/banana.jpg");
let bathroom = new Products("bathroom", "./images/bathroom.jpg");
let boots = new Products("boots", "./images/boots.jpg");
let breakFast = new Products("breakfast", "./images/breakfast.jpg");
let bubbleGum = new Products("bubblegum", "./images/bubblegum.jpg");
let chair = new Products("chair", "./images/chair.jpg");
let cthulhu = new Products("cthulhu", "./images/cthulhu.jpg");
let dogDuck = new Products("dog-duck", "./images/dog-duck.jpg");
let dragon = new Products("dragon", "./images/dragon.jpg");
let pen = new Products("pen", "./images/pen.jpg");
let petSweep = new Products("pet-sweep", "./images/pet-sweep.jpg");
let scissors = new Products("scissors", "./images/scissors.jpg");
let shark = new Products("shark", "./images/shark.jpg");
let sweep = new Products("sweep", "./images/sweep.jpg");
let tauntaun = new Products("tauntaun", "./images/tauntaun.jpg");
let unicorn = new Products("unicorn", "./images/unicorn.jpg");
let waterCan = new Products("water-can", "./images/water-can.jpg");
let wineGlass = new Products("wine-glass", "./images/wine-glass.jpg");

state.allProductsArray.push(banana, bathroom, boots, breakFast, bubbleGum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);

renderProduct();

productContainer.addEventListener("click", handleProdClick);
