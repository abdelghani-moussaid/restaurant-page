export default function menuDisplay() {
    const menuTitleArr = [
        "THE ORIGINAL",
        "BANELLA",
        "STRAWTELLA",
        "SPECTACULOOS",
        "BANANA CREAM",
        "WAFFLE SUNDAE",
        "WAFFLE SPLIT",
        "S'MORE",
        "ITALIAN DREAMIN"
    ];
    const menuItemArr = [
        "OUR FAMOUS BRIOCHE PEARL SUGAR WAFFLE",
        "NUTELLA + FRESH BANANA",
        "NUTELLA + FRESH STRAWBERRIES",
        "COOKIE BUTTER + BISCOFF COOKIES",
        "STRAWBERRIES + BANANAS + NUTELLA",
        "BANANAS + SWEET CREAM",
        "ICE CREAM + SAUCE OF YOUR CHOICE + WHIP + SPRINKLES",
        "CLASSIC BANANA SPLIT WITH HOMEMADE FUDGE",
        "HERSHEY'S + MARSHMALLOWS + BISCOFF GRAHAM CRUMB"
    ];
    const content = document.querySelector("#content");
    const title = document.createElement("h1");
    title.classList.add("title");
    title.innerText = "Your Cosy Cafe";
    const menu = document.createElement("div");
    menu.classList.add("menu");
    const menuHeader = document.createElement("h1");
    menuHeader.classList.add("menu-header");
    menuHeader.innerText = "WAFFLES & FRENCH TOAST";
    content.appendChild(title);
    menu.appendChild(menuHeader);
    for(let i = 0; i < 9; i++){
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        const index = document.createElement("span");
        index.classList.add("menu-index");
        index.innerText = `${i + 1}`;
        const title = document.createElement("span");
        title.classList.add("menu-title");
        title.innerText = `${menuTitleArr[i]}`;
        const desc = document.createElement("span");
        desc.classList.add("menu-desc");
        desc.innerText = `${menuItemArr[i]}`;
        menuItem.appendChild(index);
        menuItem.appendChild(title);
        menuItem.appendChild(desc);
        menu.appendChild(menuItem);
    }
    const mode = document.createElement("p");
    mode.classList.add("mode");
    mode.innerText = "DINE IN - CARRY OUT - DELIVERY";
    const phone = document.createElement("p");
    phone.classList.add("phone");
    phone.innerText = "321-546-8209";
    content.appendChild(menu);
    content.appendChild(mode);
    content.appendChild(phone);
}