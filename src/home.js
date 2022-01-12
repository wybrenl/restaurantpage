export default function makeHome() {
    const home = document.createElement('div') 
    home.classList.add('main');
    home.setAttribute('id', 'main')

    home.innerHTML = 'Quite possibly the best Braai restaurant outside of South-Africa';

    return home;
}