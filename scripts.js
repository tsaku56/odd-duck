"use strict";

// let hello = alert("Hello, please click on the products you like!");
// let warning = alert("Please don't touch our duck.");

let duckCounter = 0;
function helloQuack() {
  duckCounter++;
  if (duckCounter === 1) {
    alert(`Quack!`);
  }
  if (duckCounter === 1) {
    alert(`I asked you not to touch the duck.`);
  }
  if (duckCounter === 2) {
    alert(`Ouch, that's fowl play!`);
  }
  if (duckCounter === 3) {
    alert(`This means war!`);
    document.getElementById("siteLogo").src = "https://media0.giphy.com/media/fWAAhHvKk9QtMOSZfy/giphy.gif";
    document.body.style.backgroundColor = "rgba(105, 105, 105, 0.664)";
  } else if (duckCounter >= 4) {
    alert(`I will get you at the quack of dawn.`);
  }
}

let productContainer = document.querySelector("section");
let resultButton = document.querySelector("#resultButton");
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

let usedProd = [];

function renderProduct() {
  let prod1 = getRandomNumber();
  let prod2 = getRandomNumber();
  let prod3 = getRandomNumber();
  while (prod1 === prod2 || prod1 === prod3 || prod2 === prod3 || usedProd.includes(prod1) || usedProd.includes(prod2) || usedProd.includes(prod3)) {
    prod1 = getRandomNumber();
    prod2 = getRandomNumber();
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

  usedProd = [];
  usedProd.push(prod1, prod2, prod3);
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
    resultButton.addEventListener("click", renderChart);
    // resultButton.className = `clicks-allowed`;
    productContainer.className = `novoting`;
    alert("Please Click Table Results Button");
    let thanks = document.querySelector("#voting");
    let you = document.createElement("h3");
    you.textContent = `Thanks for being involed in our survey!`;
    thanks.appendChild(you);
    renderResults();
  } else {
    renderProduct();
  }
}

function renderResults() {
  let ul = document.querySelector("ul");
  let ulh2 = document.createElement("h2");
  ulh2.textContent = `The Results`;
  ul.appendChild(ulh2);
  for (let i = 0; i < state.allProductsArray.length; i++) {
    let li = document.createElement("li");
    li.textContent = `• ${state.allProductsArray[i].name} had ${state.allProductsArray[i].clicks} votes, and was seen ${state.allProductsArray[i].views} times.(${Math.round(
      (state.allProductsArray[i].clicks / state.allProductsArray[i].views) * 100
    )}%)`;
    ul.appendChild(li);
  }
}

function renderChart() {
  const labelArray = [];
  const clicksArray = [];
  const viewsArray = [];

  for (let i = 0; i < state.allProductsArray.length; i++) {
    let thisProd = state.allProductsArray[i];
    labelArray.push(thisProd.name);
    clicksArray.push(thisProd.clicks);
    viewsArray.push(thisProd.views);
  }

  const data = {
    labels: labelArray,
    datasets: [
      {
        label: "Views",
        data: viewsArray,
        backgroundColor: ["rgb(223, 167, 15)"],
        borderColor: ["rgb(226, 148, 46)"],
        borderWidth: 2,
      },
      {
        label: "Clicks",
        data: clicksArray,
        backgroundColor: ["rgb(255, 255, 255)"],
        borderColor: ["rgba(211, 187, 176, 0.3)"],
        borderWidth: 2,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      indexAxis: "y",
    },
  };
  const canvasChart = document.getElementById("myChart");
  new Chart(canvasChart, config);
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

// const oldProdArray = [];

// let settings = {
//   data: oldProdArray,
// };

// function loadSettings() {
//   let getSetttings = localStorage.getItem("settings");
//   if (getSetttings) {
//     setting = JSON.parse(getSetttings);
//     for (let i = 0; i < settings.data.length; i++) {
//       const oldProd = new Products(settings.data[i].name, settings.data[i].src, settings.data[i].view, settings.data[i].click);
//       oldProdArray.push(oldProd);
//     }
//   }
// }

// function saveSettings() {
//   let stringify = JSON.stringify(settings);
//   localStorage.setItem("settings", stringify);
//   console.log(stringify);
// }

// function pageLoad() {
//   let saveSettings = localStorage.getItem("settings");
//   if (!saveSettings) {
//     return;
//   }
// }

renderProduct();

productContainer.addEventListener("click", handleProdClick);
