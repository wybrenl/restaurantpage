import './style.css';
import Icon from './logo.jpeg';
import makeHome from './home.js';
import makeMenu from './menu.js';
import makeContact from './contact.js';

let content = document.getElementById("content");

function makeHeader() {
    // create pagewidth headerbox
    const headNav = document.createElement('headNav')
    headNav.classList.add('headNav')
    const header = document.createElement('header');
    header.classList.add('header')

    // create logo for left and right side of headerbox
    const myLogo = new Image();
    myLogo.classList.add('logo')
    myLogo.src = Icon;

    const myLogo2 = new Image();
    myLogo2.classList.add('logo');
    myLogo2.src = Icon;

    // create text in middle of headerbox
    const headerText = document.createElement('headerText');
    headerText.classList.add('headerText')
    headerText.innerHTML = "Welcome to the Braai House"

    //add logo and text to headerbox
    header.appendChild(myLogo);
    header.appendChild(headerText);
    header.appendChild(myLogo2);
    headNav.appendChild(header)
    headNav.appendChild(makeNav());
    
    //return complete headerbox
    return headNav;
}

function makeNav() {
    const nav = document.createElement('nav');
    nav.classList.add('nav')
    
    const home = document.createElement('button');
    home.classList.add('button')
    home.setAttribute('id', 'home')
    home.innerHTML = 'Home'
    const menu = document.createElement('button');
    menu.classList.add('button')
    menu.setAttribute('id', 'menu')
    menu.innerHTML = 'Menu'
    const contact = document.createElement('button');
    contact.classList.add('button')
    contact.setAttribute('id', 'contact')
    contact.innerHTML = 'Contact'

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    return nav;
}

function makeFooter() {
    const footer = document.createElement("footer")
    footer.classList.add('footer')

    footer.innerHTML = '© Henkie B productions'

    return footer
}

content.appendChild(makeHeader());
content.appendChild(makeHome());
content.appendChild(makeFooter());

let main = document.getElementById("main");

document.getElementById('home').addEventListener('click', function(){main.replaceWith(makeHome()); main = document.getElementById("main")});
document.getElementById('menu').addEventListener('click', function(){main.replaceWith(makeMenu()); main = document.getElementById("main")});
document.getElementById('contact').addEventListener('click', function(){main.replaceWith(makeContact()); main = document.getElementById("main")});