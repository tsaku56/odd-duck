const platilist = document.getElementById("platilist");
const platiform = document.getElementById("platiform");

const allPlats = [];

function Platypus(name) {
  this.name = name;
  this.render = function () {
    const listItem = document.createElement("li");
    listItem.textContent = this.name;
    platilist.appendChild(listItem);
  };
}

const perry = new Platypus("Perry");

console.log(perry);

perry.render();

// form to create new objects
function handleFormSubmit(event) {
  event.preventDefault();
  // event.target the form input 'newplat' then then value added
  const newplat = new Platypus(event.target.newplat.value);
  allPlats.push(newplat);
  platiform.reset();
  newplat.render();
  localStorage.setItem("allPlats", JSON.stringify(allPlats));
}
