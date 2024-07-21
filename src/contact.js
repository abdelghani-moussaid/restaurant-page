export default function contactDisplay(){
    const content = document.querySelector("#content");
    const title = document.createElement("h1");
    title.classList.add("title");
    title.innerText = "Your Cosy Cafe";
    const phone = document.createElement("p");
    phone.classList.add("phone-contact");
    phone.innerText = "321-546-8209";
    const reservation = document.createElement("p");
    reservation.classList.add("reservation");
    reservation.innerText = "Our restaurant is first come, first serve. We do not take reservations.";
    const form = document.createElement("form");
    const firstName = document.createElement("label");
    firstName.htmlFor = "firstName";
    firstName.innerText = "First Name";
    const firstNameInput = document.createElement("input");
    firstNameInput.id = "firstName";
    firstNameInput.setAttribute("type", "text");
    const lastName = document.createElement("label");
    lastName.htmlFor = "lastName";
    lastName.innerText = "Last Name";
    const lastNameInput = document.createElement("input");
    lastNameInput.id = "lastName";
    lastNameInput.setAttribute("type", "text");
    const email = document.createElement("label");
    email.htmlFor = "email";
    email.innerText = "Email";
    const emailInput = document.createElement("input");
    emailInput.id = "email";
    emailInput.setAttribute("type", "email");
    const help = document.createElement("label");
    help.htmlFor = "help";
    help.innerText = "How can we help you?";
    const helpInput = document.createElement("textarea");
    helpInput.id = "help";
    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    form.appendChild(firstName);
    form.appendChild(firstNameInput);
    form.appendChild(lastName);
    form.appendChild(lastNameInput);
    form.appendChild(email);
    form.appendChild(emailInput);
    form.appendChild(help);
    form.appendChild(helpInput);
    form.appendChild(submit);
    content.appendChild(title);
    content.appendChild(phone);
    content.appendChild(reservation);
    content.appendChild(form);
}