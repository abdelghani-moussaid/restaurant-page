import HomeImage from './home.jpeg';

export default function homeDisplay() {
    const content = document.querySelector("#content");
    const title = document.createElement("h1");
    title.classList.add("title");
    title.innerText = "Your Cosy Cafe";
    const image = new Image();
    image.src = HomeImage;
    const description = document.createElement("p");
    description.classList.add("description");
    description.innerText = "Where morning magic meets golden indulgence: Sip, squeeze, and savor your way to a perfect day!";
    const mode = document.createElement("p");
    mode.classList.add("mode");
    mode.innerText = "DINE IN - CARRY OUT - DELIVERY";
    const phone = document.createElement("p");
    phone.classList.add("phone");
    phone.innerText = "321-546-8209";
    content.appendChild(title);
    content.appendChild(image);
    content.appendChild(description);
    content.appendChild(mode);
    content.appendChild(phone);
}