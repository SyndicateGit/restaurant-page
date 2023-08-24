import _ from 'lodash';
import './style.css';
import initializeWebsite from "./website";
import githubIcon from './images/github_icon.png'

initializeWebsite();

function addGithubIcon(){
  const icon = new Image();
  icon.src = githubIcon;
  icon.alt = 'github_icon'
  icon.id = 'github-icon'
  
  document.getElementById("github_link").appendChild(icon);
}

addGithubIcon();

console.log("Index.js is working")