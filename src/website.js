import loadHome from "./main";
import loadMenu from "./menu";
import loadContact from "./contact";

function initializeWebsite(){
  console.log("initializeWebsite is working")
  loadMenu();
  loadHome();
  loadContact();
}
export default initializeWebsite;