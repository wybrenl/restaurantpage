export default function makeMenu() {
    const home = document.createElement('div') 
    home.classList.add('main');
    home.setAttribute('id', 'main')

    home.innerHTML = 'What would you like to eat?';

    return home;
}