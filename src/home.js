function createHome(){
  const home = document.createElement("div");
  home.classList.add("home");
  
  home.appendChild(createP("Best Pizza in Canada"));
  home.appendChild(createP("Made with passion since 1998"));

  const img = document.createElement("img");
  img.src = "./images/chef.png";
  img.alt = "chef";
  img.id = "chef";

  home.appendChild(img);

  home.appendChild(createP("Order online or visit us!"))

  return home;
}

function createP(sentence){
  const p = document.createElement("p");
  p.textContent = sentence;

  return p;
}

function loadHome(){
  const main = document.getElementById("main");
  main.textContent = ""; // Refreshes main whenever we load a new main
  main.appendChild(createHome());
}

export default loadHome;