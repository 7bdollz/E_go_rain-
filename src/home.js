import landingImageUrl from "./la.jpg";
import { content } from "./index";
let loadhomepage = () => {
  // Clear previous content
  content.innerHTML = "";

  // Heading
  let heading = document.createElement("h1");
  heading.textContent = "Delighting Experience";
  heading.setAttribute("id", "heading");
  content.appendChild(heading);

  // Paragraph
  let para = document.createElement("p");
  para.textContent = "A taste of perfection in every dish";
  para.setAttribute("id", "para");
  content.appendChild(para);

  // Image holder with image
  let imageholder = document.createElement("div");
  imageholder.setAttribute("id", "imageholder");
  imageholder.style.display = "flex";
  imageholder.style.justifyContent = "center";
  imageholder.style.alignItems = "center";
  imageholder.style.width = "100%";
  imageholder.style.height = "300px";

  let landingImage = document.createElement("img");
  landingImage.src = landingImageUrl;
  landingImage.style.maxWidth = "100%";
  landingImage.style.maxHeight = "100%";
  landingImage.style.borderRadius = "20px";
  landingImage.setAttribute("id", "landingImage");
  imageholder.appendChild(landingImage);

  content.appendChild(imageholder);
};
export { loadhomepage };
