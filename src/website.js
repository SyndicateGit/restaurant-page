//Generating main content from tabs
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

// Github icon for footer
import githubIcon from './images/github_icon.png'

// HEADER SECTION

function addHeader(){
  
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
  // Footer container
  const footer = document.createElement('div');
  footer.className = 'footer';
  
  const text = document.createElement('p');
  text.textContent = 'Copyright © '

  // Clickable link to github account: SyndicateGit + (icon)
  const githubLink = document.createElement('a')
  githubLink.id = 'github_link'
  githubLink.href = "https://github.com/SyndicateGit"

  const githubAccount = document.createElement('p');
  githubAccount.textContent = 'SyndicateGit'

  githubLink.appendChild(githubAccount);
  githubIcon = createGithubIcon();
  githubLink.appendChild(githubIcon);

  // Add text and link to footer
  footer.appendChild(text);
  footer.appendChild(githubLink);

  return footer
}



// Main Function to export
function initializeWebsite(){
  const content = document.getElementById("content")
  content.appendChild(createFooter());
}
export default initializeWebsite;