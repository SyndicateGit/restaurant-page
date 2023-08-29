//Generating main content from tabs
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

// Image imports
import githubIcon from './images/github_icon.png'

// HEADER SECTION

function createHeaderNav(){
  const nav = document.createElement('nav');

  const homeButton = document.createElement("button");
  homeButton.classList.add("button-nav");
  homeButton.textContent = "Home";

  const menuButton = document.createElement("button");
  menuButton.classList.add("button-nav");
  menuButton.textContent = "Menu";

  const contactButton = document.createElement("button");
  contactButton.classList.add("button-nav");
  contactButton.textContent = "Contact";

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav
}

function createHeader(){
  // Header Container
  const header = document.createElement('div');
  header.className = 'header'

  const restaurantName = document.createElement('h1');
  restaurantName.className = 'header-restaurant-name'
  restaurantName.textContent = 'Raymond\'s Pizzaria'

  header.appendChild(restaurantName);
  header.appendChild(createHeaderNav());
  return header;
}

// MAIN SECTION

function createMain(){
  const main = document.createElement('main');
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}


// FOOTER SECTION
function createGithubIcon(){
  const icon = new Image();
  icon.src = githubIcon;
  icon.alt = 'github_icon'
  icon.id = 'github-icon'
  return icon;
}

function createFooter(){
  const footer = document.createElement('div');
  footer.className = 'footer';
  
  const text = document.createElement('p');
  text.textContent = 'Copyright © '

  const githubLink = document.createElement('a')
  githubLink.id = 'github_link'
  githubLink.href = "https://github.com/SyndicateGit"

  const githubAccount = document.createElement('p');
  githubAccount.textContent = 'SyndicateGit'
  githubIcon = createGithubIcon();

  githubLink.appendChild(githubAccount);
  githubLink.appendChild(githubIcon);

 
  footer.appendChild(text);
  footer.appendChild(githubLink);

  return footer
}



// Main Function to export
function initializeWebsite(){
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}

export default initializeWebsite;