
import Search from "./search.js";
import "./style.css";
const searchzone = document.createElement("div")
const setting = document.querySelector("#setting");
const day = document.querySelector("#day");
const menu = document.querySelector("#menu");
const searchButton = document.getElementById('search');
const content = document.querySelector("#content")
const body = document.querySelector("body")
searchButton.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg"
       width="24" height="24"
       viewBox="0 0 24 24"
       role="img"
       aria-label="Search icon">
    <!-- Circle (lens) -->
    <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2" fill="none"/>
    <!-- Handle -->
    <line x1="16" y1="16" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
`;

day.textContent = new Date().toLocaleDateString('en-GB', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});
setting.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-label="Settings icon">
  <!-- Teeth: 8 rounded rects rotated around center -->
  <rect x="11" y="1.5" width="2" height="4" rx="1" fill="currentColor" transform="rotate(0 12 12)"/>
  <rect x="11" y="1.5" width="2" height="4" rx="1" fill="currentColor" transform="rotate(45 12 12)"/>
  <rect x="11" y="1.5" width="2" height="4" rx="1" fill="currentColor" transform="rotate(90 12 12)"/>
  <rect x="11" y="1.5" width="2" height="4" rx="1" fill="currentColor" transform="rotate(135 12 12)"/>
  <rect x="11" y="1.5" width="2" height="4" rx="1" fill="currentColor" transform="rotate(180 12 12)"/>
  <rect x="11" y="1.5" width="2" height="4" rx="1" fill="currentColor" transform="rotate(225 12 12)"/>
  <rect x="11" y="1.5" width="2" height="4" rx="1" fill="currentColor" transform="rotate(270 12 12)"/>
  <rect x="11" y="1.5" width="2" height="4" rx="1" fill="currentColor" transform="rotate(315 12 12)"/>

  <!-- Outer ring -->
  <circle cx="12" cy="12" r="7.2" fill="none" stroke="currentColor" stroke-width="1.6"/>

  <!-- Center -->
  <circle cx="12" cy="12" r="3.2" fill="currentColor"/>
</svg>
`
menu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-label="Menu icon">
  <rect x="4" y="6.2" width="16" height="2" rx="1" fill="currentColor"/>
  <rect x="4" y="11"  width="16" height="2" rx="1" fill="currentColor"/>
  <rect x="4" y="15.8" width="16" height="2" rx="1" fill="currentColor"/>
</svg>`


searchButton.addEventListener("click",()=>{
  Search()
})  
const header = document.createElement("div")
body.insertBefore(header,content) 
body.insertBefore(searchzone,header)

header.id = "header"




export{content,header,searchzone}
