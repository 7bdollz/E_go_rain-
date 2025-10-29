import { content } from ".";

let loadContactPage = () => {
  content.innerHTML = "";
  // WhatsApp link button
  const whatsappBtn = document.createElement("a");
  whatsappBtn.textContent = "contact us via WhatsApp";
  whatsappBtn.href = "https://wa.me/2348012345678"; // <-- put your number here
  whatsappBtn.target = "_blank"; // opens in new tab
  whatsappBtn.style.display = "inline-block";
  whatsappBtn.style.marginTop = "10px";
  whatsappBtn.style.padding = "8px 12px";
  whatsappBtn.style.background = "green";
  whatsappBtn.style.color = "white";
  whatsappBtn.style.textDecoration = "none";
  whatsappBtn.style.borderRadius = "5px";

  content.appendChild(whatsappBtn);

  const XBtn = document.createElement("a");
  XBtn.textContent = "contact us on X";
  XBtn.href = "https://X.com/user"; // <-- put your number here
  XBtn.target = "_blank"; // opens in new tab
  XBtn.style.display = "inline-block";
  XBtn.style.marginTop = "10px";
  XBtn.style.padding = "8px 12px";
  XBtn.style.background = "#1DA1f2";
  XBtn.style.color = "white";
  XBtn.style.textDecoration = "none";
  XBtn.style.borderRadius = "5px";

  content.appendChild(XBtn);

  const instaBtn = document.createElement("a");
  instaBtn.textContent = "contact us Instagram";
  instaBtn.href = "https://instagram.com/user"; // <-- put your number here
  instaBtn.target = "_blank"; // opens in new tab
  instaBtn.style.display = "inline-block";
  instaBtn.style.marginTop = "10px";
  instaBtn.style.padding = "8px 12px";
  instaBtn.style.background = "#E4405f";
  instaBtn.style.color = "white";
  instaBtn.style.textDecoration = "none";
  instaBtn.style.borderRadius = "5px";

  content.appendChild(instaBtn);
};

export { loadContactPage };
