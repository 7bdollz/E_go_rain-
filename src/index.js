import "./style.css";
import { loadhomepage } from "./home";
import { loadMenuPage } from "./menu";
import { loadContactPage } from "./contact";

const header = document.querySelector("header");
const content = document.querySelector("#content");
const footer = document.querySelector("footer");

// Set footer text content
if (footer) {
  footer.textContent = "© 2025 dishedbyQueency. All rights reserved.";
}

// Navigation
const dashboardItems = document.createElement("ul");

const home = document.createElement("li");
home.textContent = "home";
const menu = document.createElement("li");
menu.textContent = "menu";
const contact = document.createElement("li");
contact.textContent = "contact";
dashboardItems.appendChild(home);
dashboardItems.appendChild(menu);
dashboardItems.appendChild(contact);

home.addEventListener("click", loadhomepage);
menu.addEventListener("click", loadMenuPage);
contact.addEventListener("click", loadContactPage);

const logo = document.createElement("div");
logo.textContent = "dishedbyQueency";
logo.setAttribute("id", "logo");
logo.setAttribute("style", "margin-left: 10px");
header.appendChild(logo);
header.appendChild(dashboardItems);

// Load homepage by default
loadhomepage();

export { content, menu };
