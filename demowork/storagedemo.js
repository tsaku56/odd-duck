// larger data will be stored online
// local storage is used for smaller data kept

"use strict";

let settings = {
  darkMode: false,
  comment: "",
};

let mode = document.getElementsByClassName("mode");
let details = document.getElementsByTagName("details");
let commentBox = document.getElementById("commentBox");

function enterDarkMode() {
  let body = document.body;
  let welcome = document.getElementById("welcome");
  let button = document.getElementById("darkButton");
  body.classList.remove("light");
  welcome.classList.remove("light");
  body.classList.add("dark");
  welcome.classList.add("dark");
  button.setAttribute("checked", "checked");
  settings.darkMode = true;
  saveSettings();
}

function enterLightMode() {
  let body = document.body;
  let welcome = document.getElementById("welcome");
  let button = document.getElementById("lightButton");
  body.classList.remove("dark");
  welcome.classList.remove("dark");
  body.classList.add("light");
  welcome.classList.add("light");
  button.setAttribute("checked", "checked");
  settings.darkMode = false;
  saveSettings();
}

function loadSettings() {
  let getSettings = localStorage.getItem("settings");
  if (getSettings) {
    settings = JSON.parse(getSettings);
  }
}

for (let i = 0; i < mode.length; i++) {
  mode[i].addEventListener("click", function () {
    if (this.value === "dark") {
      enterDarkMode();
    }
    if (this.value === "light") {
      enterLightMode();
    }
  });
}

// function for saving to local storage
function saveSettings() {
  let stringify = JSON.stringify(settings);
  localStorage.setItem("settings", stringify);
  console.log(stringify);
}

function pageLoad() {
  let saveSettings = localStorage.getItem("settings");
  // having !before is stating if this is falsey
  if (!saveSettings) {
    return;
  }
  loadSettings();
  if (settings.darkMode) {
    enterDarkMode();
  } else {
    enterLightMode();
  }
}

// when input changes, will keep inside of the box
commentBox.addEventListener("input", function () {
  settings.comment = commentBox.value;
});

pageLoad();
