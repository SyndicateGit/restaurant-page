import phoneIcon from "./images/phone.svg"

function createContact(){
  const contact = document.createElement("div");
  contact.classList.add("contact");
  
  const phone = document.createElement("div");
  phone.classList.add("phone");

  const icon = new Image();
  icon.src = phoneIcon;
  icon.alt = "phone icon";
  icon.classList.add("icon");

  phone.appendChild(icon);
  phone.appendChild(createP("123-456-7890"));

  contact.appendChild(phone);
  return contact;
}

function createP(sentence){
  const p = document.createElement("p");
  p.textContent = sentence;

  return p;
}

function loadContact(){
  const main = document.getElementById("main");
  main.textContent = ""; // Refreshes main whenever we load a new main
  main.appendChild(createContact());
}

export default loadContact;