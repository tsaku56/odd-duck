const platibutton = document.getElementById("platibutton");

function handleButtonClick() {
  const platypusLS = JSON.parse(localStorage.getItem("allPlats"));
  // loop through array to the render list
  for (let i = 0; i < platypusLS.length; i++) {
    let newPlat = new Platypus(platypusLS[i].name);
    allPlats.push(newPlat);
    newPlat.render();
  }
}

platibutton.addEventListener("click", handleButtonClick);
