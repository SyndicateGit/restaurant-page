import phoneIcon from "./images/phone.svg"

import clockIcon from "./images/clock.svg"

function createContact(){
  const contact = document.createElement("div");
  contact.classList.add("contact");
  
  const phone = document.createElement("div");
  phone.classList.add("phone");

  const icon = new Image();
  icon.src = phoneIcon;
  icon.alt = "phone icon";
  icon.classList.add("icon");

  const hours = document.createElement("div");
  hours.classList.add("hours");

  const clock = new Image();
  clock.src = clockIcon;
  clock.alt = "phone icon";
  clock.classList.add("icon");


  const hoursTime = document.createElement("div");
  hoursTime.appendChild(createP("Mon-Fri: 8am-8pm"));
  hoursTime.appendChild(createP("Sat-Sun: Cloesd"));

  hours.appendChild(clock);
  hours.appendChild(hoursTime);

  phone.appendChild(icon);
  phone.appendChild(createP("123-456-7890"));

  const googleMaps = document.createElement("div");
  googleMaps.classList.add("googleMaps");
  googleMaps.innerHTML = "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214758.79711848433!2d-117.2340910766061!3d32.74964580211821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbfe28190f4b67%3A0x92fa4bca315a5951!2sMcDonald's!5e0!3m2!1sen!2sus!4v1601955396977!5m2!1sen!2sus\" width=\"500px\" height=\"300px\" frameborder=\"0\" style=\"border: 0\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>"

  contact.appendChild(phone);
  contact.appendChild(googleMaps);
  contact.appendChild(hours);

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