// Pizza img imports
import peperonni from "./images/pizzas/peperonni.png";

import hawaiian from "./images/pizzas/hawaiian.png";

import vegetarian from "./images/pizzas/vegetarian.png";

import works from "./images/pizzas/works.png";

function createMenu(){
  const menu = document.createElement("div");
  menu.classList.add("menu");
  
  menu.appendChild(
    createMenuItem(
    "Pepperoni", "Tomato sauce, Mozarella, Peperroni", peperonni
  ));
  menu.appendChild(
    createMenuItem(
    "Hawaiian", "Tomato sauce, Mozarella, Ham, Pineapple", hawaiian
  ));
  menu.appendChild(
    createMenuItem(
    "Works", "Tomato sauce, Mozarella, Peperroni, Sausage, Onion, Mushroom, Green Pepper", works
  ));
  menu.appendChild(
    createMenuItem(
    "Vegetarian", "Tomato sauce, Mozarella, Mushroom, Brocolli, Tomatos, Corn", vegetarian
  ));
  return menu;
}

function createMenuItem(name, toppings, src){
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const pizzaName = document.createElement("h2");
  pizzaName.textContent = name;

  const pizzaToppings = document.createElement("p");
  pizzaToppings.textContent = toppings;

  const pizzaImage = document.createElement("img");
  pizzaImage.src = src;
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