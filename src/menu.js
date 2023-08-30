function createMenu(){
  const menu = document.createElement("div");
  menu.classList.add("menu");
  
  menu.appendChild(
    createMenuItem(
    "Pepperoni", "Tomato sauce, Mozarella, Peperroni"
  ));
  menu.appendChild(
    createMenuItem(
    "Hawaiian", "Tomato sauce, Mozarella, Ham, Pineapple"
  ));
  menu.appendChild(
    createMenuItem(
    "Works", "Tomato sauce, Mozarella, Peperroni, Sausage, Onion, Mushroom, Green Pepper"
  ));
  menu.appendChild(
    createMenuItem(
    "Vegetarian", "Tomato sauce, Mozarella, Mushroom, Brocolli, Tomatos, Corn"
  ));
  return menu;
}

function createMenuItem(name, toppings){
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const pizzaName = document.createElement("h2");
  pizzaName.textContent = name;

  const pizzaToppings = document.createElement("p");
  pizzaToppings.textContent = toppings;

  const pizzaImage = document.createElement("img");
  pizzaImage.src = `/src/images/pizzas/${name.toLowerCase()}.png`;
  pizzaImage.alt = `${name}`;

  menuItem.appendChild(pizzaImage);
  menuItem.appendChild(pizzaName);
  menuItem.appendChild(pizzaToppings);

  return menuItem;
}

function loadMenu(){
  const main = document.getElementById("main");
  main.textContent = ""; // Refreshes main whenever we load a new main
  main.appendChild(createMenu());
}

export default loadMenu;