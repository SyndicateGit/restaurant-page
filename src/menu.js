function createMenu(){
  const menu = document.createElement("div");
  menu.classList.add("menu");
  
  const item1 = document.createElement("div");
  item1.textContent = "Loading Menu...";
  
  menu.appendChild(item1);
  return menu;
}

function loadMenu(){
  const main = document.getElementById("main");
  main.textContent = ""; // Refreshes main whenever we load a new main
  main.appendChild(createMenu());
}

export default loadMenu;