function createContact(){
  const contact = document.createElement("div");
  contact.classList.add("contact");
  contact.textContent = " Loading Contact..."
  return contact;
}

function loadContact(){
  const main = document.getElementById("main");
  main.textContent = ""; // Refreshes main whenever we load a new main
  main.appendChild(createContact());
}

export default loadContact;