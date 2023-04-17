// get all the platypus from localstorage and render them
if (localStorage.allPlats) {
  const platypusLS = JSON.parse(localStorage.getItem("allPlats"));
  // loop through array to the render list
  for (let i = 0; i < platypusLS.length; i++) {
    let newPlat = new Platypus(platypusLS[i].name);
    allPlats.push(newPlat);
    newPlat.render();
  }
}

platiform.addEventListener("submit", handleFormSubmit);
