"use strict";

// will return the first selector or return Null
let goatContainer = document.querySelector("section");
let resultButton = document.querySelector("section + div");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");

let clicks = 0;
let maxClicksAllowed = 9;
// holds current state of application
const state = {
  allGoatsArray: [],
};

function Goat(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

function getRandomNumber() {
  return Math.floor(Math.random() * state.allGoatsArray.length);
}

function renderGoat() {
  let goat1 = getRandomNumber();
  let goat2 = getRandomNumber();

  while (goat1 === goat2) {
    goat2 = getRandomNumber();
  }

  image1.src = state.allGoatsArray[goat1].src;
  image2.src = state.allGoatsArray[goat2].src;
  image1.alt = state.allGoatsArray[goat1].name;
  image2.alt = state.allGoatsArray[goat2].name;
  state.allGoatsArray[goat1].views++;
  state.allGoatsArray[goat2].views++;
  console.log(state.allGoatsArray[goat1]);
  console.log(state.allGoatsArray[goat2]);
}

function handleGoatClick(event) {
  if (event.target === goatContainer) {
    alert("Please click on an image");
  }
  clicks++;
  let clickGoat = event.target.alt;
  //   i = 0, looping the amount of times the array is long. at the end is the after though, the last action taken.
  for (let i = 0; i < state.allGoatsArray.length; i++) {
    if (clickGoat === state.allGoatsArray[i].name) {
      state.allGoatsArray[i].clicks++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    goatContainer.removeEventListener("click", handleGoatClick);
    resultButton.addEventListener("click", renderResults);
    resultButton.className = `clicks-allowed`;
    goatContainer.className = `no-voting`;
  } else {
    renderGoat();
  }
}

function renderResults() {
  let ul = document.querySelector("ul");
  for (let i = 0; i < state.allGoatsArray.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${state.allGoatsarray[i].name} had views, ${state.allGoatsArray[i].views}. Was clicked ${state.allGoatsArray[i].clicks} times.`;
    ul.appendChild(li);
  }
}

let cruising = new Goat("name", "./images/");
let float = new Goat();
let hand = new Goat();
let kissing = new Goat();
let sassy = new Goat();
let smiling = new Goat();
let sweater = new Goat();

state.allGoatsArray.push(cruising, float, hand, kissing, sassy, smiling, sweater);

renderGoat();

goatContainer.addEventListener("click", handleGoatClick);
