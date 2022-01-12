export default function makeContact() {
    const home = document.createElement('div') 
    home.classList.add('main');
    home.setAttribute('id', 'main')

    home.innerHTML = 'Call us';

    return home;
}