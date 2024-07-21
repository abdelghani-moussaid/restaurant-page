import HomeDisplay from "./home.js";
import MenuDisplay from "./menu.js";
import ContactDisplay from "./contact.js";
import './style.css';


function display(){
    const content = document.querySelector("#content");
    const home = document.querySelector("#nav-home");
    const menu = document.querySelector("#nav-menu");
    const contact = document.querySelector("#nav-contact");

    const links = document.querySelectorAll('button');

    HomeDisplay()

    home.addEventListener('click', (e) => {
        empty(content);
        handleClick(e);
        HomeDisplay();
    })

    menu.addEventListener('click', (e) => {
        empty(content);
        handleClick(e);
        MenuDisplay();
    })

    contact.addEventListener('click', (e) => {
        empty(content);
        handleClick(e);
        ContactDisplay();
    })

    function empty(element){
        while(element.firstElementChild){
            element.firstElementChild.remove();
        }
    }
    
    function handleClick(e) {
        if (e.target.matches('button')) {
            links.forEach(link => link.classList.remove('active'));
            e.target.classList.add('active');
        }
      }
    

}


display();