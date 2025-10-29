import "./menu.css";
import { content } from "./index";
import { loadhomepage } from "./home";
import { menu } from "./index";
let loadMenuPage = () => {
  content.innerHTML = "";

  let heading = document.createElement("h1");
  heading.textContent = "Our Menu";
  heading.setAttribute("id", "menuhead");
  content.appendChild(heading);
  let soupOption = document.createElement("select");
  soupOption.setAttribute("class", "foodlist");
  let soups = [
    "Soups",
    "Nsala soup",
    "Vegetabale soup",
    "Egusi soup",
    "ora soup",
  ];
  soups.forEach((soup) => {
    let option = document.createElement("option");
    option.setAttribute("class", "option");
    option.value = soup.toLocaleLowerCase();
    option.textContent = soup;
    soupOption.appendChild(option);
  });
  content.appendChild(soupOption);

  let stewOption = document.createElement("select");
  stewOption.setAttribute("class", "foodlist");
  let stews = [
    "Stews",
    "ofe akwu",
    "tomato chicken stew",
    "tomato beef stew",
    "egg stew",
  ];
  stews.forEach((stew) => {
    let option = document.createElement("option");
    option.setAttribute("class", "option");
    option.value = stew.toLocaleLowerCase();
    option.textContent = stew;
    stewOption.appendChild(option);
  });
  content.appendChild(stewOption);

  let riceOption = document.createElement("select");
  riceOption.setAttribute("class", "foodlist");
  let rices = [
    "Rices",
    "palm rice(special)",
    "cocnut rice",
    "jollof rice",
    "white rice",
  ];
  rices.forEach((rice) => {
    let option = document.createElement("option");
    option.setAttribute("class", "option");
    option.value = rice.toLocaleLowerCase();
    option.textContent = rice;
    riceOption.appendChild(option);
  });
  content.appendChild(riceOption);

  let specialsOption = document.createElement("select");
  specialsOption.setAttribute("class", "foodlist");
  let specials = ["Specials", "abacha", "nkwobi", "pepper soup(chicken)"];
  specials.forEach((special) => {
    let option = document.createElement("option");
    option.setAttribute("class", "option");
    option.value = special.toLocaleLowerCase();
    option.textContent = special;
    specialsOption.appendChild(option);
  });
  content.appendChild(specialsOption);
};

export { loadMenuPage };
