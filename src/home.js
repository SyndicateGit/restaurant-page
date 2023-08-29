function createHome(){
  const home = document.createElement("div");
  home.classList.add("home");
  home.textContent = "Loading Home...";
  return home;
}

function loadHome(){
  const main = document.getElementById("main");
  main.textContent = ""; // Refreshes main whenever we load a new main
  main.appendChild(createHome());
}

export default loadHome;